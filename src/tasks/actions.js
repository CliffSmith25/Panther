import * as types from './actionTypes'

export function addTask(text) {
  return {
    type: types.ADD_TASK,
    text
  }
}

export function deleteTask(taskID) {
  return {
    type: types.DELETE_TASK,
    taskID
  }
}

export function toggleTaskComplete(taskID) {
  return {
    type: types.TOGGLE_TASK_COMPLETE,
    taskID
  }
}

export function assignTask(taskID, userID) {
  return {
    type: types.ASSIGN_TASK,
    taskID,
    userID
  }
}

export function rejectTask(taskID, userID) {
  return {
    type: types.REJECT_TASK,
    taskID,
    userID
  }
}
