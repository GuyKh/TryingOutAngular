using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Model
{
    [Serializable]
    [DataContract]
    public class Task : IIndexable
    {
        [DataMember]

        public int id { get; set; } = -1;

        [DataMember]

        public string Name { get; set; }

        [DataMember]

        public bool Completed { get; set; }

        public Task(string name)
        {
            Name = name;
        }

        public int GetID()
        {
            return id;
        }

        public void SetID(int id)
        {
            this.id = id;
        }
    }
}
