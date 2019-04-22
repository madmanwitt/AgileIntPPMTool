import React, { Component } from "react";
import ProjectTask from "./ProjectTasks/ProjectTask";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

class Backlog extends Component {
  onDragEnd = result => {};
  render() {
    const { project_tasks_prop } = this.props;

    const tasks = project_tasks_prop.map((project_task, index) => (
      <Draggable draggableId={project_task.id} index={index}>
        {provided => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <ProjectTask key={project_task.id} project_task={project_task} />
          </div>
        )}
      </Draggable>
    ));

    let todoItems = [];
    let inProgressItems = [];
    let doneItems = [];

    // for (let i = 0; i < tasks.length; i++) {
    //   if (tasks[i].props.project_task.status === "TO_DO") {
    //     todoItems.push(tasks[i]);
    //   }

    //   if (tasks[i].props.project_task.status === "IN_PROGRESS") {
    //     inProgressItems.push(tasks[i]);
    //   }

    //   if (tasks[i].props.project_task.status === "DONE") {
    //     doneItems.push(tasks[i]);
    //   }
    // }

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="container">
          <div className="row">
            <Droppable droppableId={1}>
              {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <div className="card text-center mb-2">
                    <div className="card-header bg-secondary text-white">
                      <h3>TO DO</h3>
                    </div>
                  </div>
                  {tasks}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-primary text-white">
                  <h3>In Progress</h3>
                </div>
              </div>
              {inProgressItems}
            </div>
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-success text-white">
                  <h3>Done</h3>
                </div>
              </div>
              {doneItems}
            </div>
          </div>
        </div>
      </DragDropContext>
    );
  }
}

export default Backlog;
