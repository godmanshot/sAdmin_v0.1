<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/index.css') }}?q={{rand()}}" rel="stylesheet" type="text/css">

    </head>
    <body>


        <div id="root"></div>

        <script type="text/javascript" src="{{ asset('js/main.js') }}?q={{rand()}}"></script>
    </body>
</html>
