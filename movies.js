movies = [{title: "Forrest Gump", year: 1995, rating: 9},
{title: "Gangs of Wasseypur", year: 2010, rating: 8},
{title: "Shawshank Redumption", year: 1990, rating: 9.3},
{title: "Barfi", year: 2012, rating: 8.7},
{title: "Kaksparsh", year: 2015, rating: 6.6},
{title: "Shutter Island", year: 2011, rating: 9.1},
{title: "Prestige", year: 2014, rating: 9.9},
{title: "Lunchbox", year: 2016, rating: 9.1},
{title: "Coolie", year: 2020, rating: 3.1},
{title: "Zero", year: 2018, rating: 5.1}
]
console.log(movies.filter(i => i.rating > 7).sort((a, b)=> b.year - a.year).map(a => a.title));