import React from 'react'

const APIContext = React.createContext({
  recentPlan: { },
  userArticles: [],
  login: () => {},
  logout: () => {},
  signup: () => {},
  getRecentPlan: () => {},
  setUserArticles: () => {},
  setRecentPlan: () => {},
  user: undefined,
  isLoggedIn: false,
})

export default APIContext;