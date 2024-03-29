# Deployment

The Trivadis Technology Radar can be deployed using the Platys stack available in this folder. The technology-radar service is not part of Platys, therefore it has been added using the `docker-compose.override.yml` file.

## Local Environment


```
export GITHUB_PROJECT=trivadis-technology-radar
export GITHUB_OWNER=TrivadisPF
export GITHUB_USER=
export GITHUB_PASSWORD=
export DATAPLATFORM_HOME=deployment
export DOCKER_COMPOSE_VERSION=1.25.3
export PLATYS_VERSION=2.4.0
export NETWORK_NAME=eth0
export USERNAME=ubuntu
export PASSWORD=ubuntu
```

Install docker and docker compose

```
# Install Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable edge"
apt-get install -y docker-ce
sudo usermod -aG docker $USERNAME

# Install Docker Compose
curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

Checkout the project and start docker-compose

```
# Get the project
cd /home/${USERNAME} 
git clone https://"${GITHUB_USER}":"${GITHUB_PASSWORD}"@github.com/${GITHUB_OWNER}/${GITHUB_PROJECT}
chown -R ${USERNAME}:${USERNAME} ${GITHUB_PROJECT}

cd /home/${USERNAME}/${GITHUB_PROJECT}/${DATAPLATFORM_HOME}

# Prepare Environment Variables into .bash_profile file
printf "export PUBLIC_IP=$PUBLIC_IP\n" >> /home/$USERNAME/.bash_profile
printf "export DOCKER_HOST_IP=$DOCKER_HOST_IP\n" >> /home/$USERNAME/.bash_profile
printf "export DATAPLATFORM_HOME=$PWD\n" >> /home/$USERNAME/.bash_profile
printf "\n" >> /home/$USERNAME/.bash_profile
sudo chown ${USERNAME}:${USERNAME} /home/$USERNAME/.bash_profile

# Startup Environment
docker-compose up -d
```

## AWS Lightsail

Create a Linux Ubuntu 20.04 LTS virtual machine with 4 GB memory using the following script: 

```
export GITHUB_PROJECT=trivadis-technology-radar
export GITHUB_OWNER=TrivadisPF
export GITHUB_USER=
export GITHUB_PASSWORD=
export DATAPLATFORM_HOME=deployment
export DOCKER_COMPOSE_VERSION=1.25.3
export PLATYS_VERSION=2.4.0
export NETWORK_NAME=eth0
export USERNAME=ubuntu
export PASSWORD=ubuntu

# Prepare Environment Variables 
export PUBLIC_IP=$(curl ipinfo.io/ip)
export DOCKER_HOST_IP=$(ip addr show ${NETWORK_NAME} | grep "inet\b" | awk '{print $2}' | cut -d/ -f1)

# allow login by password
sudo sed -i "s/.*PasswordAuthentication.*/PasswordAuthentication yes/g" /etc/ssh/sshd_config
echo "${USERNAME}:${PASSWORD}"|chpasswd
sudo service sshd restart

# add alias "dataplatform" to /etc/hosts
echo "$DOCKER_HOST_IP     dataplatform" | sudo tee -a /etc/hosts

# Install Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable edge"
apt-get install -y docker-ce
sudo usermod -aG docker $USERNAME

# Install Docker Compose
curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

# Install Platys
sudo curl -L "https://github.com/TrivadisPF/platys/releases/download/${PLATYS_VERSION}/platys_${PLATYS_VERSION}_linux_x86_64.tar.gz" -o /tmp/platys.tar.gz
tar zvxf /tmp/platys.tar.gz 
sudo mv platys /usr/local/bin/
sudo chown root:root /usr/local/bin/platys
sudo rm platys.tar.gz 

# Install various Utilities
sudo apt-get install -y curl jq kafkacat

# needed for elasticsearch
sudo sysctl -w vm.max_map_count=262144   

# Get the project
cd /home/${USERNAME} 
git clone https://"${GITHUB_USER}":"${GITHUB_PASSWORD}"@github.com/${GITHUB_OWNER}/${GITHUB_PROJECT}
chown -R ${USERNAME}:${USERNAME} ${GITHUB_PROJECT}

cd /home/${USERNAME}/${GITHUB_PROJECT}/${DATAPLATFORM_HOME}

# Prepare Environment Variables into .bash_profile file
printf "export PUBLIC_IP=$PUBLIC_IP\n" >> /home/$USERNAME/.bash_profile
printf "export DOCKER_HOST_IP=$DOCKER_HOST_IP\n" >> /home/$USERNAME/.bash_profile
printf "export DATAPLATFORM_HOME=$PWD\n" >> /home/$USERNAME/.bash_profile
printf "\n" >> /home/$USERNAME/.bash_profile
sudo chown ${USERNAME}:${USERNAME} /home/$USERNAME/.bash_profile

# Startup Environment
docker-compose up -d
```

Make sure to open port `28540 ` on the Networking tab.
