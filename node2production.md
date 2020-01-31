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

