import React from 'react'

const APIContext = React.createContext({
  userArticles: [],
  deleteTopic: () => {},
  login: () => {},
  logout: () => {},
  user: undefined,
  topic: "",
  setTopic: () => {},
})

export default APIContext;