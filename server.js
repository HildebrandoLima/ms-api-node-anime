const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    return res.json
    ([{
        "anime": "Kimetsu no Yaiba",
        "denominacao": "Demon Slayer",
        "genero": "Shōnen",
        "personagens_principais": [
            {
                nome: "Tanjirõ Kamado",
                imagem: "http://assets.stickpng.com/images/5ede49f9b760540004f2c5e7.png",
                descricao: "Com Urokodaki, Tanjiro aprende a dominar a Respiração da Água, mas isso não é tudo. O anime deixa claro que há uma certa importância em sua família, conhecida pelos brincos em formato de cartas hanafuda. Depois descobrimos que a Dança Kagura é passada há gerações em seu sangue, escondendo um ataque lendário.",
                poderes_habilidades: "Marca Caçador de Oni, Espada Nichirin Escarlate e Mundo Transparente",
                tecnica_respiracao: "Respiração da Água e Respiração do Sol"
            },
            {
                nome: "Nezuko Kamado",
                imagem: "https://i.pinimg.com/originals/81/fb/3e/81fb3e42dea5a26e6ae1c3595cef10b6.png",
                descricao: "Era apenas um pouco mais nova que Tanjiro quando sua família foi morta pelo misterioso Muzan Kibutsuji, que a transformou em um demônio. A força bruta de Nezuko Kamado foi amplificada com a transformação, que também trouxe um surto de agilidade, resistência e uma sede insaciável por sangue humano. Motivada pelo amor de seu irmão, ela conseguiu controlar seus instintos para não ferir outros humanos. Passou a usar um pedaço de bambu para controlar sua vontade e dormiu por muitos anos para conservar energia. Ao despertar, seguiu jornada dentro de uma caixa nas costas de Tanjiro, surgindo apenas para ajudar em combate quando extremamente necessário. Ela foi hipnotizada por Urokodaki para enxergar todos os humanos como seus familiares, logo passou a defender todos que conhece dos demais demônios. É vista com desconfiança por muitos, mas os conquista ao revelar seu lado mais doce. Não aprendeu nenhuma técnica de respiração, atacando com suas garras e magia.",
                poderes_habilidades: "Kekeijutsu",
                tecnica_respiracao: "",
            },
            {
                nome: "Zenitsu Agatsuma",
                imagem: "http://assets.stickpng.com/images/5ede49b5b760540004f2c5e5.png",
                descricao: "É um Caçador de Demônios que usa a Respiração do Trovão. Treinado pelo ex-hashira Jigoro Kuwajima, nunca confiou nas próprias habilidades, mas seu mestre viu seu potencial. Naturalmente covarde e mulherengo, está sempre fugindo de batalhas, buscando o caminho mais fácil e dando em cima de garotas. Mas quando precisa lutar sério, todo seu histerismo fica de lado e ele assume uma nova personalidade, centrada e objetiva, capaz de derrotar praticamente qualquer inimigo. Tem um coração muito bom e defende seus amigos com sua própria vida, se for preciso.",
                poderes_habilidades: "Assim como Tanjiro tem um olfato muito apurado, Zenitsu consegue ouvir sons com uma sensibilidade acima de qualquer humano normal. Sua audição é tão apurada que ele consegue até mesmo discernir o som das pessoas do som produzido pelos onis.",
                tecnica_respiracao: "Respiração do Relâmpago"
            },
            {
                nome: "Inosuke Hashira",
                imagem: "http://assets.stickpng.com/thumbs/5ede491bb760540004f2c5e1.png",
                descricao: "Inosuke Hashibira é um Caçador de Recompensas usuário da Respiração da Besta. Ele cresceu isolado em uma montanha, entre os javalis selvagens e sozinho criou a sua própria Técnica de Respiração, derivada da Respiração do Vento. Por esse motivo, não sabe interagir socialmente e está sempre chamando todo mundo para brigar. Apesar de ser casualmente agressivo, não é realmente violento, de modo que desafia seus amigos para batalhas como forma de demonstrar carinho. Não gosta de ser superado por ninguém e está sempre tentando compensar. Por baixo da máscara de javali que carrega para todo o canto, esconde um rosto delicado e gentil.",
                poderes_habilidades: "",
                tecnica_respiracao: "Respiração da Besta"
            }
        ],
        "hashiras": [
            {
                nome: "Shinobu Kocho",
                imagem: "https://psxbrasil.com.br/wp-content/uploads/2021/05/Demon-Slayer-Game_05-07-21.jpg",
                descricao: "Shinobu Kocho é o pilar da Respiração dos Insetos. Sua aparência meiga é compatível com o seu jeito de agir: manso, fofo e delicado. Mas no fundo é tudo falsidade, como uma venenosa borboleta monarca. Ela oferece torturar onis para que paguem por seus pecados, do jeito mais gentil possível. Suas técnicas perfuram, ao invés de cortar, e envenenam os demônios com essência de Glicíneas.",
                poderes_habilidades: "",
                tecnica_respiracao: "Respiração dos Insetos"
            },
            {
                nome: "Giyu Tomioka",
                imagem: "http://pm1.narvii.com/7289/a5f6143ae35695b45e49012b209a02e4f440a2c5r1-638-359v2_uhq.jpg",
                descricao: "É o Pilar da Respiração da Água, pupilo de Urokodaki. Ele tem um jeitão rústico, de poucos amigos, mas é uma pessoa simpática e extremamente justa. É tão poderoso que conseguiu superar seu mestre, criando novas formas da Respiração da Água. Consegue derrotar um onis mantendo a mais pura calma, sem parecer se mover.",
                poderes_habilidades: "",
                tecnica_respiracao: "Respiração da Água"
            },
            {
                nome: "Mitsuri Kanroji",
                imagem: "https://criticalhits.com.br/wp-content/uploads/2021/07/20210302-cosplay-de-mitsuri-kanroji-1200x675-1.jpg",
                descricao: "Mitsuki Kanroji é a Hashira da Respiração do Amor. Ela consegue ver o melhor em cada um e se apaixona por todos. Demonstrações de amor a deixam toda derretidinha. O jeito mais fácil de defini-la é com a canção “Amor de Que”, da Pabllo Vittar. Seus ataques são como um chicote.",
                poderes_habilidades: "",
                tecnica_respiracao: "Respiração do Amor"
            },
            {
                nome: "Kyojuro Rengoku",
                imagem: "http://assets.stickpng.com/images/5ede498db760540004f2c5e4.png",
                descricao: "Kyojuro Rengoku é a Hashira de Respiração das Chamas. Ele é empolgado em tudo o que faz, como um labrador humano. Tudo que faz é com uma imensa animação e defende a crença de que os mais fortes tem o dever de proteger os mais fracos. Ele tem um papel crucial no filme Demon Slayer: Mugen Train.",
                poderes_habilidades: "",
                tecnica_respiracao: "Respiração das Chamas"
            },
            {
                nome: "Tengen Uzui",
                imagem: "https://www.pngitem.com/pimgs/m/614-6145241_tengen-uzui-costume-demon-slayer-manga-covers-hd.png",
                descricao: "É o Hashira da Respiração do Som. Ele é uma pessoa de aparências, que tenta fazer tudo do jeito mais extravagante possível. Mas essa sua preocupação em impressionar é uma resposta a sua baixa auto-estima. Tem três esposas e ataca com duas espadas. Em combate, usa o som dos inimigos para derrotá-los.",
                poderes_habilidades: "",
                tecnica_respiracao: "Respiração do Som"
            },
            {
                nome: "Gyomei Himejima",
                imagem: "https://i.pinimg.com/originals/26/d1/83/26d1830c3cbcee8aaffdb1c4eb37694c.png",
                descricao: "É o Hashira de Respiração da Pedra. Ele segue os ensinamentos budistas e está sempre chorando pela humanidade. Fala com paciência, compaixão e pena por todos, apesar de julgá-los um pouco. Foi o mentor de Shinazugawa e, em combate, luta usando um machado preso a uma maça por uma corrente.",
                poderes_habilidades: "",
                tecnica_respiracao: "Respiração da Pedra"
            },
            {
                nome: "Obanai Iguro",
                imagem: "https://www.kindpng.com/picc/m/440-4407572_kimetsu-no-yaiba-obanai-iguro-hd-png-download.png",
                descricao: "É o Hashira de Respiração da Serpente. Ele é impetuoso com aqueles que desviam da conduta por zelar pelo futuro da Corporação acima de tudo, até mesmo de seus companheiros. Está sempre colocando os demais para baixo e ataca com uma espada ondulada usando sua Respiração única.",
                tecnica_respiracao: "Respiração da Serpente"
            },
            {
                nome: "Muichiro Tokito",
                imagem: "https://www.pngitem.com/pimgs/m/633-6336817_kimetsu-no-yaiba-muichiro-hd-png-download.png",
                descricao: "É o Hashira da Respiração da Névoa. Ele é uma pessoa avoada, dificilmente prestando atenção no que acontece ao seu redor. Isso também se reflete em seu modo irreverente de ver a vida, mas muda completamente para um humor sério quando alguém desonra seu mestre. Descendente de um Kizuki, sua respiração única foca em usar velocidade.",
                tecnica_respiracao: "Respiração da Névoa"
            },
            {
                nome: "Sanemi Shinazugawa",
                imagem: "https://64.media.tumblr.com/48eab23503d68a292ad9afbcf4060caa/tumblr_pv2oc8mAee1xqsds7o1_1280.png",
                descricao: "É o Hashira da Respiração do Vento. Mas diferente do elemento que é suave e silencioso, ele é violento, barulhento e impulsivo. Seu corpo coberto por cicatrizes é uma prova de seu pavio curto, uma vez que muitas delas foram feitas por ele mesmo.",
                tecnica_respiracao: "Respiração do Vento"
            }
        ],
        "onis": [
            {
                nome: "Muzan Kibutsuji",
                imagem: "https://i.pinimg.com/originals/95/58/eb/9558eb7cb093e1c2c01f430e830d25a7.png",
                titulo: "Rei dos Onis",
                descricao: "O grande Rei dos Onis, Muzan Kibutsuji foi o primeiro de sua espécie, progenitor de todos os demônios que vieram depois. Seu sangue puro lhe torna praticamente invencível, imune às táticas mais eficientes como decapitação. Para piorar, é capaz de fortalecer qualquer demônio a níveis absurdos com apenas um pouco de seu sangue. Foi assim que todos os Kizuki se tornaram tão poderosos. Poucos sobreviveram à sua presença, então é difícil determinar a verdadeira extensão de seu poder de combate. Mas saiba que seria necessário o equivalente a nove Hashiras para começar a desafiar minimamente o grande Rei dos Demônios.",
                poderes_habilidades: "Diversas",
                tecnica_respiracao: ""
            },
            {
                nome: "Kokushibou",
                imagem: "http://static.zerochan.net/Kokushibou.full.2688228.png",
                titulo: "Lua Superior 1",
                descricao: "Antes de questionar sua posição como Primeiro entre os Lua Superiores, saiba que Kokushibo conseguiu se defender contra três dos pilares mais fortes do Esquadrão sem problemas. Ele é um dos demônios mais velhos que existem, aprendendo muito sobre o Esquadrão de Caçadores de Demônios ao longo de sua vida. Inclusive, Kokushibo conseguiu despertar sua própria Marca do Caçador de Oni. Ninguém consegue alcançar o seu nível com uma Espada Nichirin. Complementando seu Estilo de Respiração da Lua.",
                poderes_habilidades: "Sua Arte Demoníaca de Sangue cria até doze espadas de luz para o desespero de seus inimigos.",
                tecnica_respiracao: ""
            },
            {
                nome: "Doma",
                imagem: "https://i.pinimg.com/originals/05/90/c5/0590c53a556f9eeb25ffbce731f2e5f6.png",
                titulo: "Lua Superior 2",
                descricao: "Muitos subestimam seu poder, mas Doma tem um dos históricos mais sangrentos entre os Luas Superiores, sendo responsável pela morte dos antigos Pilares do Inseto e da Flor. O problema é que ele não se leva muito a sério, até ser tarde demais.",
                poderes_habilidades: "Sua técnica mais poderosa é Criança Divina Cristalina, em que usa sua Arte Demoníaca de Sangue para criar clones de gelo com acesso quase que irrestrito a seu arsenal. Quem tirá-lo do sério, vai precisar enfrentar uma fúria equivalente a um pequeno esquadrão de Luas Superiores.",
                tecnica_respiracao: ""
            },
            {
                nome: "Akaza",
                imagem: "https://criticalhits.com.br/wp-content/uploads/2021/11/Akaza_coaxing_Kyojuro_into_becoming_a_demon.png",
                titulo: "Lua Superior 3",
                descricao: "Seu passado trágico fez com que fosse taxado de demônio muito antes de sua verdadeira transformação. O sangue de Muzan acabou sendo uma bênção que empoderou Akaza para alcançar seu verdadeiro potencial. Como o terceiro dos Kizuki, Akaza foi capaz até mesmo de derrotar o Pilar do Fogo Enfrentar Tojiro e Yasuke, que usavam suas melhores técnicas, também foi fichinha para o oni. E olha que ele conseguiu alcançar esse nível de poder sem precisar devorar mulheres, o que aumenta drasticamente a força de um demônio.",
                poderes_habilidades: "Luta",
                tecnica_respiracao: ""
            },
            {
                nome: "Kaigaku",
                imagem: "https://64.media.tumblr.com/c0ffeef1c1331b5ff631bf33de739bd4/e66d226730a87ca3-1f/s400x600/9b2717a19d368611bd0f3d9b0fabdb26f47ef17c.png",
                titulo: "Lua Superior 6",
                descricao: "Teoricamente, Kaigaku ocupa o cargo de sexto membro da Kizuki, mas conhecendo as suas origens, vemos que ele é mais perigoso do que parece. Além de conhecer os segredos da Kizuki, ele foi treinado por Jigoro para se tornar um Hashira, aprendendo em primeira mão as estratégias dos caçadores de oni. Só que seu mestre não lhe julgou digno para o Pilar do Trovão e seu rival, Zenitsu, passou a ser o favorito para assumir o título. Fervendo de ódio, ele procurou Muzan Kibutsuji para arquitetar sua vingança. Agora, além de ser um mestre da Respiração de Trovão, ele também controla a Arte Demoníaca de Sangue que lhe permite gerar e manipular eletricidade: uma combinação muito perigosa nas mãos de um oni devidamente motivado.",
                poderes_habilidades: "Controla a Arte Demoníaca de Sangue que lhe permite gerar e manipular eletricidade: uma combinação muito perigosa nas mãos de um oni devidamente motivado.",
                tecnica_respiracao: ""
            },
            {
                nome: "Nakime",
                imagem: "https://i.pinimg.com/originals/8f/e7/55/8fe7550eb4e010d799f7eb85785fec01.png",
                titulo: "Lua Superior 4",
                descricao: "Ela pode ter uma aparência serena, misteriosa, mas tem um motivo para Nakime ter sido convidada para ocupar a quarta cadeira da Kizuki.",
                poderes_habilidades: "Essa oni tem habilidades defensivas absurdas e consegue controlar o Castelo Infinito a bel prazer quando toca sua biwa, uma espécie de banjo oriental. Com um simples acorde, ela cria novas salas cheias de perigos que deixam seus adversários cada vez mais longe de alcançá-la. Sua força não vem de seu poder ofensivo, mas, se for preciso, pode erguer pilastras para destruir seus inimigos. As portas criadas por Nakime podem servir como portais místicos, o que ela aproveita para repelir golpes do Tojirou na luta entre os dois.",
                tecnica_respiracao: ""
            },
            {
                nome: "Hantengu",
                imagem: "https://pbs.twimg.com/media/EaZ_ykEXkAMTPsR.jpg",
                titulo: "Lua Superior 4",
                descricao: "Quarto dos Kizuki, Hantengu é o mestre das emoções e faz delas sua arma. Usa sua Arte Demoníaca de Sangue para manifestar suas emoções como clones de si mesmo, mais jovens, poderosos e perigosos. Cada um tem suas próprias habilidades únicas, que vão desde manipulação do vento a lanças, fazendo com que esse oni enfrente vários caçadores sem muitos problemas. Quando a manifestação de sua raiva absorve outros de seus clones, dá luz a Zohakuten. Este clone pode usar as habilidades únicas dos demais clones, além de também manipular madeira. Consegue até mesmo invocar imensos dragões de madeira que causam um estrago absurdo aos seus oponentes.",
                poderes_habilidades: "Cria e manipula clones de si mesmo.",
                tecnica_respiracao: ""
            },
            {
                nome: "Gyokko",
                imagem: "https://64.media.tumblr.com/6169209e9904097e5df5b3e74c569e0c/b6e60792ce60b7f6-56/s1280x1920/3daf29345a77964a7120f4d3035180c40b6e66a5.png",
                titulo: "Nem todos demônios têm uma aparência aterrorizante, mas Gyokko não mede esforços para traumatizar seus adversários. Quinto entre os Kizuki, seu corpo é coberto por pequenos membros extras que mais parecem partes de boneca dilaceradas e remendadas no demônio. Em combate, ele é igualmente assustador. Usando sua Arte Demoníaca de Sangue, consegue manipular a água com perfeição. Nem as criaturas marinhas escapam de seu domínio. Altamente perigoso, consegue teleportar, regenerar e transformar suas células.",
                descricao: "Lua Superior 5",
                poderes_habilidades: "Consegue manipular a água com perfeição. Nem as criaturas marinhas escapam de seu domínio. Altamente perigoso, consegue teleportar, regenerar e transformar suas células.",
                tecnica_respiracao: ""
            },
            {
                nome: "Gyutaro e Daki",
                imagem: "https://pm1.narvii.com/7839/a9fc38a31e2a0e71dc472a093f0304cc07436184r1-736-468v2_hq.jpg",
                titulo: "Lua Superior 6",
                descricao: "Juntos, os irmãos Gyutaro e Daki ocuparam oficialmente a sexta posição entre os demônios mais fortes da Kizuki. Eles são tão fortes que já devoraram mais de vinte Hashiras do Esquadrão de Caçadores de Demônios e serão os principais adversários no próximo arco do anime. Ambos têm o poder de manipular sua própria carne, afiando partes do seu corpo para usar como arma, mas Gyutaro vai mais além. Ele consegue manipular seu sangue, solidificando para criar barreiras e senbon. Além disso, também pode torná-lo extremamente venenoso, como fez quando enfrentou Tengen Uzui.",
                poderes_habilidades: "Ambos têm o poder de manipular sua própria carne, afiando partes do seu corpo para usar como arma, mas Gyutaro vai mais além. Ele consegue manipular seu sangue, solidificando para criar barreiras e senbon. Além disso, também pode torná-lo extremamente venenoso.",
                tecnica_respiracao: ""
            },
            {
                nome: "Enmu",
                imagem: "https://i.pinimg.com/originals/25/6d/7d/256d7d394a5d43ae45366679ef1a58f0.png",
                titulo: "Lua inferior 1",
                descricao: "O único demônio Lua inferior a alcançar um lugar nessa lista, Enmu recebeu uma dose extra do sangue de Muzan, o que ampliou seu grande potencial para o combate. Com sua Arte Demoníaca de Sangue, consegue colocar seus adversários para dormir e então os persegue em seus sonhos, onde estão mais vulneráveis. Vemos toda extensão de seu poder quando ele sequestra um trem, planejando devorar todos os seus passageiros, no filme Demon Slayer: Mugen Train.",
                poderes_habilidades: "Arte Demoniaca de Sangue",
                tecnica_respiracao: ""
            }
        ],
        "outros": [
            {
                nome: "Kagaya Ubuyashiki",
                imagem: "https://i.pinimg.com/originals/c7/ab/8d/c7ab8dcfd618862eaaeacc60067c8bee.png",
                descricao: "Kagaya Ubuyashiki é o Líder da Corporação de Caçadores de Oni, mais conhecido por seus subordinados como Mestre. Não demonstra suas habilidades de luta, mas mesmo assim é reverenciado por todos os Hashira. Seu tom de voz sereno é capaz de acalmar qualquer um em sua presença. Tem um senso de justiça mais aguçado que o resto da Corporação.",
                poderes_habilidades: "",
                tecnica_respiracao: ""
            },
            {
                nome: "Kanao Tsuyuri",
                imagem: "https://i.pinimg.com/originals/46/6e/1e/466e1e4aa6249fbd640244e3da41e074.png",
                descricao: "É a Tsuguko, a futura Hashira da Respiração das Flores. Ela teve um passado bem abusivo e por isso reprime ao máximo suas emoções. Também não confia em suas próprias escolhas e usa uma moeda quando precisa tomar uma decisão. Acaba se aproximando de Tanjiro com o passar do tempo.",
                poderes_habilidades: "",
                tecnica_respiracao: "Respiração das Flores"
            },{
                nome: "Sakonji Urokodaki",
                imagem: "https://www.giantbomb.com/a/uploads/square_small/16/165036/3284898-sakonji.png",
                descricao: "Sakonji Urokodaki é o ex-hashira da Respiração da Água. Ele é um homem de meia-idade, de coração mole, que sempre esconde o rosto por debaixo de uma máscara de Tengu. Ensina para crianças tudo que pode sobre a Respiração na esperança que sobrevivam ao Exame de Caçador de Onis. Entre seus alunos mais notáveis, temos Tanjiro e Giyu.",
                poderes_habilidades: "",
                tecnica_respiracao: "Respiração da Água"
            },
            {
                nome: "Tamayo",
                imagem: "https://i.pinimg.com/originals/0d/17/74/0d17742b7e6788c228a2fface9de9e8b.png",
                descricao: "Tamayo é uma oni curandeira que Tanjiro encontra na mesma cidade em que vê Muzan Kibutsuji. Por sua natureza pacifista, se recusa a matar humanos para sobreviver e adota uma dieta de sangue descartado. Cuida da Nezuko quando ela precisa e prometeu achar um jeito de curá-la, se o Tanjiro trouxer o sangue de Lua Maiores.",
                poderes_habilidades: "Kekeijutsu",
                tecnica_respiracao: ""
            },
            {
                nome: "Yushiro",
                imagem: "https://i.pinimg.com/474x/60/b2/3a/60b23a6247c60a0481ca5e6cbfa0aabe.jpg",
                descricao: "Yushiro é um oni que foi salvo por Tamayo em seu leito de morte. Desde então, ele fez de seu objetivo de vida servir a oni até a morte. Ele é o principal protetor da médica, ocultando sua presença de todo o mal e combatendo possíveis invasores. Não esconde sua devoção e ataca qualquer um que atente contra sua honra.",
                poderes_habilidades: "Kekeijutsu",
                tecnica_respiracao: ""
            },
            {
                nome: "Murata",
                imagem: "https://psxbrasil.com.br/wp-content/uploads/2021/05/Demon-Slayer-Game-Murata_05-27-21.jpg",
                descricao: "Murata tem uma soberba incompatível com a sua habilidade mediana. Ele é um Caçador de Demônios que sobreviveu ao ataque de um perigoso Kizuki, mas isso por ter fugido quando seus aliados foram controlados. Aparece esporadicamente nos arcos futuros e é um usuário da Respiração de Água.",
                poderes_habilidades: "",
                tecnica_respiracao: "Respiração de Água"
            }
        ]
    }]);
});

app.listen(3030, () => {
    console.log("Servidor Rodando");
});