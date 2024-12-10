#!/bin/bash
cd /home/ec2-user/land-marsx-io
sudo npm run build   # Run the server in the background
sudo npm start -- --port 3001 -y
#sudo /bin/systemctl restart httpd.service
