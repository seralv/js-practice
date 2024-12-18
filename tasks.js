const TaskModule = (function () {
  let tasks = [];

  function showTasks() {
    console.log(`Tareas actuales: ${tasks.join(", ") || "Ninguna tarea"}`);
  }

  return {
    addTask: function (task) {
      tasks.push(task);
      console.log(`Tarea añadida: ${task}.`);
      showTasks();
    },
    removeTask: function (task) {
      const index = tasks.indexOf(task);
      if (index > -1) {
        tasks.splice(index, 1);
        console.log(`Tarea eliminada: ${task}.`);
      } else {
        console.log(`La tarea ${task} no existe.`);
      }
      showTasks();
    },
    clearTasks: function () {
      tasks = [];
      console.log("Todas las tareas han sido eliminadas.");
      showTasks();
    },
  };
})();

TaskModule.addTask("Estudiar JavaScript");
TaskModule.addTask("Practicar inglés");
TaskModule.removeTask("Estudiar JavaScript");
TaskModule.clearTasks();
