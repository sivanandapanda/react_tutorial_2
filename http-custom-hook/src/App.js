import React, { useEffect, useState /* , useCallback */ } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  //using useCallback
  /* const transformTasks = useCallback((task) => {
    const loadedTasks = [];

    for (const taskKey in task) {
      loadedTasks.push({ id: taskKey, text: task[taskKey].text });
    }

    setTasks(loadedTasks);
  }, []);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp(transformTasks);

  useEffect(() => {
    fetchTasks({
      url: "https://react-http-79d7b-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
    });
  }, [fetchTasks]); */

  //without needing to use useCallback, pass on the transform function along wtih sendRequest

  const transformTasks = (task) => {
    const loadedTasks = [];

    for (const taskKey in task) {
      loadedTasks.push({ id: taskKey, text: task[taskKey].text });
    }

    setTasks(loadedTasks);
  };

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    fetchTasks(
      {
        url: "https://react-http-79d7b-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
      },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
