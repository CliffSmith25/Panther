import * as actions from '../actions'
import * as types from '../actionTypes'

test('should create an action to add a task', () => {
  const text = 'test task text'
  const expectedAction = {
    type: types.ADD_TASK,
    text
  }
  expect(actions.addTask(text)).toEqual(expectedAction)
})

test('should create an action to delete a task', () => {
  const taskID = 4
  const expectedAction = {
    type: types.DELETE_TASK,
    taskID
  }
  expect(actions.deleteTask(taskID)).toEqual(expectedAction)
})

test('should create an action to toggle a task complete', () => {
  const taskID = 4
  const expectedAction = {
    type: types.TOGGLE_TASK_COMPLETE,
    taskID
  }
  expect(actions.toggleTaskComplete(taskID)).toEqual(expectedAction)
})

test('should create an action assign a task to a user', () => {
  const taskID = 4
  const userID = 111546
  const expectedAction = {
    type: types.ASSIGN_TASK,
    taskID,
    userID
  }
  expect(actions.assignTask(taskID, userID)).toEqual(expectedAction)
})

test('should create an action to reject a task from a user', () => {
  const taskID = 4
  const userID = 111546
  const expectedAction = {
    type: types.REJECT_TASK,
    taskID,
    userID
  }
  expect(actions.rejectTask(taskID, userID)).toEqual(expectedAction)
})
