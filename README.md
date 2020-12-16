# 幹話製造機
採用 Node.js 和 Express 打造的隨機幹話製造機，使用者可以在此按出隨意的組合內容


## 專案畫面
![](https://i.imgur.com/sxVlMAN.png)


## 環境建置(prerequisites)
- Node.js v10.15.0
- Express v4.17.1
- Express-handlebars v5.2.0

## 安裝與執行步驟 (installation and execution)

- 使用 Git Bash

1. 將專案clone到本地環境
   ```
   git clone https://github.com/a7465847/Restaurant_List-Project.git
   ```
2. 進入專案資料夾
   ```
   cd restaurant_list
   ```
3. 查看專案內 package.json 檔案需安裝的npm套件
   ```
   npm i <package>
   ```
4. 安裝 nodemon 套件 (本地未安裝  請執行此步驟)
   ```
   npm install -g nodemon    
   ```

5. 啟動伺服器，執行 app.js 檔案
   ```
   nodemon app.js
   ```
6. 終端機回應以下內容 代表代表可執行
   ```
   Express is running on http://localhost:3000
   ```

6. 在瀏覽器輸入 http://localhost:3000 開始使用


## 功能描述 (features)
- 可選擇對應職業
- 產生隨機組合文字


