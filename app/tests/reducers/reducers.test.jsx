var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {

  describe('searchTextReducer', () => {

    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });

  });

  describe('showCompletedReducer', () => {

    it('should flip showCompleted state', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(!action.showCompleted);
    });

  });

  describe('todosReducer', () => {

    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'New Todo'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle existing todo', () => {
      var defaultState = [{
        id: 43,
        text: 'Some Todo',
        completed: false,
        createdAt: 10,
        completedAt: undefined
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: 43
      };
      var res = reducers.todosReducer(df(defaultState), df(action));

      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toNotEqual(undefined);
    });

  });

});
