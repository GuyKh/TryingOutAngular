using System;
using System.Collections.Generic;
using System.Linq;

namespace DAL
{
    public class Repository : IRepository
    {
        private static readonly Dictionary<Type, object> _objectDictionary = new Dictionary<Type, object>();
        private static readonly Dictionary<Type, int> _objectToIndex = new Dictionary<Type, int>();

        public Repository()
        {
           
        }
        
        public T AddItem<T>(T item) where T : class, IIndexable
        {
            return (AddItems(new [] {item})).FirstOrDefault();
        }

        public IEnumerable<T> AddItems<T>(IEnumerable<T> items) where T : class, IIndexable
        {
            if (!_objectDictionary.ContainsKey(typeof (T)))
            {
                _objectDictionary[typeof(T)] = new List<T>();
                _objectToIndex[typeof (T)] = 0;
            }

            foreach (var item in items)
            {
                int index = ((List<T>) _objectDictionary[typeof (T)]).FindIndex(member => member.GetID() == item.GetID());

                if (index >= 0)
                {
                    ((List<T>) _objectDictionary[typeof (T)])[index] = item;
                }
                else
                {
                    item.SetID(_objectToIndex[typeof (T)]++);
                    ((List<T>)_objectDictionary[typeof(T)]).Add(item);
                }
            }

            var ids = items.Select(item => item.GetID());
            return GetAllItems<T>().Where(item => ids.Contains(item.GetID()));
        }

        public T GetItem<T>(int id) where T : class, IIndexable
        {
            if (_objectDictionary.ContainsKey(typeof (T)))
            {
                return ((List<T>) _objectDictionary[typeof (T)]).FirstOrDefault(member => member.GetID() == id);
            }
            return default(T);
        }

        public IEnumerable<T> GetAllItems<T>() where T : class, IIndexable
        {
            if (_objectDictionary.ContainsKey(typeof (T)))
            {
                return (List<T>) _objectDictionary[typeof (T)];
            }
            else
            {
                return new T[0];
            }
        }
    }
}
