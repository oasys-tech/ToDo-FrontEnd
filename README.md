# ToDo-アプリ(フロントエンド)

## SetUp Backend
1. ToDo-アプリ(バックエンド)を構築する ※バックエンドから始めた方は不要です
    - https://github.com/oasys-tech/ToDo-Backend
    1. gitをインストールする
        * Checkout as-is, commit Unix-style line endings : true
        * Enable symbolic links : true
    1. xamppをインストールする
        * https://www.apachefriends.org/jp/download.html
        * インストールする
        * C:\xamppを書き込みできるようにする
    1. composerをインストールする
        * https://getcomposer.org/download/
    1. C:\xampp\htdocsにソースをコピーする
    1. xamppシェルを起動する
    1. アプリケーションディレクトリに移動する
        * `$ cd htdocs\todo-app`
    1. パッケージのインストール
        * `$ composer install`
    1. apacheのバーチャルホスト設定
        "C:\xampp\apache\conf\extra\httpd-vhosts.conf"に以下を追記する
        ```
        <VirtualHost *:80>
            DocumentRoot "C:\xampp\htdocs\todo-app\public"
            ServerName localhost
            <Directory "C:\xampp\htdocs\todo-app\public">
                AllowOverride All
                Options All
                Require all granted
            </Directory>
        </VirtualHost>
        ```
    1. laravelの初期設定
        * `$ copy .env.example .env`
        * `$ php artisan key:generate`
    1. mysqlのパスワードを設定する
        * `$ mysqladmin -u root password`
        * `New password: secret`
        * `Confirm new password: secret`
    1. DBに接続する
        * `$ mysql -u root -p`
    1. 新しいスキーマを作成する
        * `CREATE DATABASE todo;`
    1. DBをマイグレートする
        * `$ php artisan migrate`
    1. テストデータを作成する
        * `$ php artisan db:seed`

## SetUp Frontend
1. npmパッケージをインストールする
    * `$ npm install`
1. フロントリソースをビルドする
    * `$ npm run dev`
1. 動作確認
    * xamppのApacheを起動する
    * http://localhost

## UIフレームワークの導入
1. MaterialUIをインストールする
    * `$ npm install @mui/material`
    * `$ npm install @emotion/react @emotion/styled`
1. レイアウトをカスタマイズする

## トップページを作成する
1. Homeページを作成する
1. ルーティングを変更する
1. 背景色を変更する

## ToDoコンポーネントを作成する
1. 必要なライブラリをインストールする
    * `$ npm install @mui/icons-material react-router-dom`
1. ToDoコンポーネントを作成する
1. ToDoコンポーネントをHomeページに追加する

## ToDoDetailコンポーネントを作成する
1. ToDoDetailコンポーネントを作成する
1. ToDoDetailコンポーネントをToDoコンポーネントに追加する
