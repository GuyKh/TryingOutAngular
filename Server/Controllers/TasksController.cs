using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;
using DAL.Model;

namespace Server.Controllers
{
    public class TasksController : ApiController
    {
        // GET: api/Task
        public IEnumerable<Task> Get()
        {
            
            return ManagerDal.Instance.Repository.GetAllItems<Task>();
        }

        // GET: api/Task/5
        public Task Get(int id)
        {
            return ManagerDal.Instance.Repository.GetItem<Task>(id);
        }

        // POST: api/Task
        public void Post([FromBody]Task value)
        {
            ManagerDal.Instance.Repository.AddItem<Task>(value);
        }

        // PUT: api/Task/5
        public void Put(int id, [FromBody]Task value)
        {
        }

        // DELETE: api/Task/5
        public void Delete(int id)
        {
        }
    }
}
