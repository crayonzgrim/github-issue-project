import React, { createContext, useState, useEffect } from "react";

const initialState = {
  lists: [],
};

const getInitialState = () => {
  const lists = localStorage.getItem("lists");

  return lists ? JSON.parse(lists) : initialState.lists;
};

export const RepoContext = createContext();

export const RepoListContextProvider = (props) => {
  // const [lists, setLists] = useState(initialState.lists);
  const [lists, setLists] = useState(getInitialState || []);

  const addRepo = (data) => {
    setLists((prev) => [...prev, { ...data[0] }]);
  };

  const removeRepo = (id) => {
    setLists((prev) => {
      return [...prev.filter((item) => item.id !== id)];
    });
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  // useEffect(() => {
  //   localStorage.removeItem("lists");
  // }, [lists]);

  return (
    <RepoContext.Provider value={{ addRepo, removeRepo, lists }}>
      {props.children}
    </RepoContext.Provider>
  );
};
