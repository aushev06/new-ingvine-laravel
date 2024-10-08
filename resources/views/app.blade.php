<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>IngVine Food - Доставка вкусной еды, доставка в Ингушетии</title>

        <meta name="description" content="Заказать еду на дом в Ингушетии. IngVine Food - быстрая доставка вкусной еды. Тел: +79280974112" />
        <meta name="keywords" content="ингушетия, доставка,ингушетия доставка,IngVine Food доставка еды,доставка еды ингушетия,доставка еды назрань,быстрая доставка,еда ингушетия,еда назрань,доставка назрань,доставка магас, где заказать еду, доставка еды в ингушетии, доставка еды на дом, доставка еды саки крым, доставка еды ингушетия, еда с доставкой, еда с доставкой на дом, заказать доставку еды, заказать еду, каталог доставок еды, заказать салат, доставка салатов, горячие блюда доставка, горячие блюда на дом, заказать горячие блюда на дом, гарниры на дом, доставка гарниров, заказать картофель фри, доставка пиццы, доставка пиццы на дом, доставка суши, доставка на дом, заказать пиццу с доставкой, пицца на дом, пицца доставка, доставка напитков, где заказать завтрак на дом, готовые завтраки с доставкой, завтрак с доставкой, завтрак с доставкой на дом, суп на дом, доставка супов, готовые закуски, доставка закусок, закуски на день рождения доставка, горячие закуски, горячие закуски на дом, детское меню с доставкой, детское меню заказать, доставка соков, роллы доставка, роллы цена, саки роллы доставка" />


        <!-- Fonts -->
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Nunito:300,400,500,700&display=swap"
        />
        <link rel="manifest" href="/manifest.json" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
