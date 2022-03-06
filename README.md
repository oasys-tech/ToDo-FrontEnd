# ToDo-アプリ(フロントエンド)

## SetUp Backend
1. ToDo-アプリ(バックエンド)を構築する ※バックエンドから始めた方は不要です
    - https://github.com/oasys-tech/ToDo-Backend
    1. gitをインストールする
        * Checkout as-is, commit Unix-style line endings : true
        * Enable symbolic links : true
    1. xamppをインストールする
        * https://www.apachefriends.org/jp/download.html (8.0.3が見つからない方はこちら https://xamppguide.com/download/xampp-8-0-3-for-windows/ )
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

## ToDoを更新する
1. ToDo更新用のHookを作成する
1. タイトルをTextFieldに変更する
1. ToDo更新用オブジェクトを作成する
1. タイトル変更時にToDo更新用のHookを呼び出す

## ToDoDetailを更新する
1. ToDoDetail更新用のHookを作成する
1. 名称をTextFieldに変更する
1. ToDoDetail更新用オブジェクトを作成する
1. 名称変更時にToDoDetail更新用のHookを呼び出す

## ToDoDetailのチェックボックスを更新する
1. ToDoDetail更新処理に「completed_flag」を追加する
1. ToDoDetail更新用のHookに「completed_flag」を追加する
1. ToDoDetail更新用オブジェクトに「completed_flag」を追加する
1. チェックボックスをクリックした際に、ToDoDetail更新用のHookを呼び出すように修正する

## ToDo更新時にOptimistic Updateを適用する
1. ToDo更新用のHookにonMutateを追加する
1. ToDo更新用のHookにonSettledを追加する

## ToDoDetail更新時にOptimistic Updateを適用する
1. ToDoDetail更新用のHookにonMutateを追加する
1. ToDoDetail更新用のHookにonSettledを追加する
1. ToDoDetail取得時にCompletedFlagをBooleanで返却するように変更する
1. ToDoDetail更新時に変更されていない項目をstateから取得するように変更する

## ToDoDetailを削除する
1. ToDoDetail削除用のHookを作成する
1. 削除ボタン押下時にToDoDetail削除用のHookを呼び出す

## ToDoを削除する
1. ToDoコンポーネントに削除ボタンを作成する
1. ToDo削除用のHookを作成する
1. 削除ボタン押下時にToDo削除用のHookを呼び出す

## ToDoDetailを追加する
1. ToDoコンポーネントに追加ボタンを作成する
1. ToDoDetail追加用のHookを作成する
1. 追加ボタン押下時にToDoDetail追加用のHookを呼び出す
1. ToDoDetailにNullを許可するようにDB定義を変更する
    * `$ php artisan make:migration alter_todo_details_table_to_name_nullable`
    * DBの定義変更を記述する
    * `$ composer require doctrine/dbal`
    * `$ php artisan migrate`
1. ToDoDetail登録・更新リクエストにNullを許可するように変更する

## ToDoを追加する
1. Homeコンポーネントに追加ボタンを作成する
1. ToDo追加用のHookを作成する
1. 追加ボタン押下時にToDo追加用のHookを呼び出す
1. ToDoにNullを許可するようにDB定義を変更する
    * `$ php artisan make:migration alter_to_dos_table_to_title_nullable`
    * DBの定義変更を記述する
    * `$ php artisan migrate`
1. ToDo登録・更新リクエストにNullを許可するように変更する

## ToDo作成時に1行ToDoDetailを作成するように修正する
1. ToDo保存時に空のToDoDetailを作成する
1. トランザクションを定義する
