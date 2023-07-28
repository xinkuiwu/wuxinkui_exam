import React from "react";

import Typography from "@mui/material/Typography";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const Quiz1 = () => {
  return (
    <Box>
      <Typography variant="body1">
        Go through the project and explain the followings:
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary="1. How the project is structured"
            secondary="Identify the core components for both backend and frontend."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"1. My answer:"}
            secondary={
              "整个项目是分为frontend文件夹和backend文件夹。" +
              "其中，1、frontend文件夹的核心组件为src/components/quizzes,用于折叠组件展示4个quiz组件组成的QuizList组件;" +
              "2、backend文件夹的核心组件为api/routes/v1/quiz.route.js，用于定义后端路由controller和对应的service。"
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="2. Life of a request"
            secondary="How does the application handle the HTTP request http://localhost:8080? And what about the API request http://localhost:8080/api/v1?"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"2. My answer:"}
            secondary={
              "1、http://localhost:8080:前端应用会向服务端发起http请求，服务器根据路由配置进行匹配，并调用对应的代码处理。" +
              "但又因为本地做了代理，根据server.js的代码，对于该路由，返回的是http://localhost:3001，展示前端本地页面。" +
              "2、http://localhost:8080/api/v1:前端http请求，根据本地代理，前往./backend/api中的Routes去匹配对于的路由和相应处理，由于后端做了请求前缀`/quiz`控制，" +
              "与该请求不匹配,因此请求没有相应的代码处理。"
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Quiz1;
