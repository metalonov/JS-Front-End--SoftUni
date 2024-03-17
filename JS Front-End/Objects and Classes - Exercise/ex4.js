function solve(inputs){

    const movies = [];

    for (const row of inputs) {
        const addMovieCommand = 'addMovie';
        const addDirectorCommand = 'directedBy';
        const addDateCommand = 'onDate';
        if (row.includes(addMovieCommand)){
            const movie = {
                name: row.substring(addMovieCommand.length + 1),
            }
            
            movies.push(movie);
        } else if (row.includes(addDirectorCommand)) {
            const [movieName, director] = row.split(` ${addDirectorCommand} `)
            const movie = movies.find(movie => movie.name === movieName);
            if (movie) {
                movie.director = director;
            }
                
        } else if (row.includes(addDateCommand)){
            const [movieName, date] = row.split(` ${addDateCommand} `)
            const movie = movies.find(movie => movie.name === movieName);
            if (movie){
                movie.date = date;
            } 

        }

    }

    for (const movie of movies) {
        
        if (!movie.name || !movie.director || !movie.date){
         continue;   
        }
        const temp = JSON.stringify(movie);

            console.log(temp);
    }
   
}

// solve([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
//     ]);

    solve([
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
        ])