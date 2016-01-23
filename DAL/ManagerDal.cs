using DAL.Model;

namespace DAL
{
    public class ManagerDal
    {
        public IRepository Repository { get; private set; }

        public ManagerDal()
        {
            Repository = new Repository();
            Repository.AddItem(new Task("Task 1"));
            Repository.AddItem(new Task("Task 2"));
        }


        private static ManagerDal _instance = null;
        public static ManagerDal Instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new ManagerDal();
                }

                return _instance;
            }
        }

        
    }
}
