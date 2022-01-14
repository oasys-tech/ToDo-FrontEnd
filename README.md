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
1. Path Intellisenseプラグインをインストールする(https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
1. ToDoコンポーネントを作成する
1. ToDoコンポーネントをHomeページに追加する

## ToDoDetailコンポーネントを作成する
1. ToDoDetailコンポーネントを作成する
1. ToDoDetailコンポーネントをToDoコンポーネントに追加する

## ToDoリストをバックエンドから取得する
1. 必要なライブラリをインストールする
    * `$ npm install react-query`
1. ToDo取得API呼び出し用のHookを作成する
1. ToDoデータ取得用のHookを作成する
 
## ToDoを表示する
1. ToDo取得APIを呼び出す
1. ToDoデータを利用してToDoコンポーネントを生成するように修正する
1. ToDoControllerのindexメソッドに、ToDoDetailも一緒に返却するように修正する
1. ToDoDetailコンポーネントにバックエンドから取得したToDoDetailを表示するように修正する
