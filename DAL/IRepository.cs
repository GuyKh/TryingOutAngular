using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface IRepository
    {
        T AddItem<T>(T item) where T : class, IIndexable;

        IEnumerable<T> AddItems<T>(IEnumerable<T> items) where T : class, IIndexable;

        T GetItem<T>(int id) where T : class, IIndexable;

        IEnumerable<T> GetAllItems<T>() where T : class, IIndexable;

    }
}
