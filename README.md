# 家庭記帳本

使用Node.js, Express, Express-handlebars, mongodb 套件製作而成

![Alt text](https://github.com/hsiyu1121/expense-tracker/blob/master/expense-tracker.png)

## 功能清單
* 在首頁一次瀏覽所有支出的清單
* 在首頁看到所有支出清單的總金額
* 新增一筆支出
* 編輯支出的所有屬性 (一次只能編輯一筆)
* 刪除任何一筆支出 (一次只能刪除一筆)
* 在首頁可以根據支出「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和。

## 環境需求
* Node.js: v10.15.0
* Express: v4.17.1
* Express-handlebars: v5.1.0
* Mongoose: v5.9.25
* body-parser: v1.19.0
* method-override: v3.0.0
   
## 啟動方式
* 將專案下載至本機內

  ``git clone https://github.com/hsiyu1121/expense-tracker.git``
* 切換至資料夾內

  ``cd expense-tracker``
* 安裝相關的套件

  ``npm install``
* 建立資料庫

  ``npm run seed``
* 透過node執行程式

  ``npm run start``
* 透過nodemno執行程式

  ``npm run dev``
* 開啟瀏覽器輸入以下網址

  ``http://localhost:3000``

