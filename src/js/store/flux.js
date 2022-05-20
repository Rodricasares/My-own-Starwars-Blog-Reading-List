const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      
      imgPl:[],
      properties: [],
      planetProperties:[],
      favorits: [],
        },
    actions: {
      // Use getActions to call a function within a fuction
      
      //https://starwars-visualguide.com/#/planets?page=1&limit=5
      setFavorit: (favorit) => {
        const store = getStore();
        const allFavorit = store.favorits.map((favorit) => {
          return favorit.uid;
        });

        if (!allFavorit.includes(favorit.uid)) {
          setStore({ favorits: [...store.favorits, favorit] });
        }
      },
      deleteFavorit: (uid) => {
        const store = getStore();
        setStore({
          favorits: store.favorits.filter((favorit) => favorit.uid != uid),
        });
      },

      //Api Planets description
      getPlanets: () => {
        fetch("https://www.swapi.tech/api/planets")
          .then((response) => response.json())
          .then((data) => setStore({ planetProperties: data.results }));
      },

      getCharacters: () => {
        fetch("https://www.swapi.tech/api/people")
          .then((response) => response.json())
          .then((data) => setStore({ properties: data.results }));
      },

      planetImg:() => {
        fetch( "https://starwars-visualguide.com/assets/img/planets/" +
        value.uid +
        ".jpg")
            .then((response) => response.json())
            .then((data) => setStore({imgPl: data.result}));
      }, 
    
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
