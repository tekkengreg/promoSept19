# DEPLOIEMENT

le deploiment est fait sur les projets :
- back : livecoding/backend
- front : livecoding/matrix

# PART 1 : HTTP

## connexion au vps

si l'ip de la machine est `9.9.9.9`

```bash
ssh root@9.9.9.9
```

## clone repo git

```bash
git clone front
git clone back
```

## installation de nodejs

```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install nodejs
```

## initialisation du projet

```bash
cd back && npm i && cd ..
cd front && npm i && cd ..
```

## configuration du back

### création d'un dossier static express

ajouter le dossier static à la racine du projet pointant vers le dossier build du front

```bash
cd back
nano server.js
```

```js
...
app.use('/', express.static('../front/build'));
```

### configuration du port

```js
...
port = 80
```

## démarrage du back

```bash
cd back
npm start
```

> --> tester l'accès au back `http://9.9.9.9`

## build du front

```bash
cd front
npm run build
```

> tester l'accès à l'application sur `http://9.9.9.9`

# PART 2 : HTTPS

## update server

```js
const httpsoptions = {
  key: fs.readFileSync("/etc/letsencrypt/live/wilder2.greenterroir.com/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/wilder2.greenterroir.com/cert.pem"),
  ca: fs.readFileSync("/etc/letsencrypt/live/wilder2.greenterroir.com/chain.pem"),
}
const httpsServer = https.createServer(httpsoptions, app);
httpsServer.listen(443, () => {
  console.log(`https server listen on port ${httpsServer.address().port}`);
});
```

## install certbot

```
apt install certbot
```

## generate certifcat

stop living server

```sh
pm2 stop 0
```

generate certficat with certbot

```sh
certbot certonly --standalone -d wilder.google.com
pm2 start 0
```

## renew certificat

automation of renewal

> be aware that let's encrypt certicates have 90 days time to live

```sh
pm2 stop 0
certbot renew --force-renewal
pm2 start 0
```
