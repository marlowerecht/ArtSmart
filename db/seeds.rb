User.destroy_all
User.reset_pk_sequence
Painting.destroy_all
Painting.reset_pk_sequence
Artist.destroy_all
Artist.reset_pk_sequence
Comment.destroy_all
Comment.reset_pk_sequence
Favorite.destroy_all
Favorite.reset_pk_sequence

puts "here we go..."

# users
puts "seeding users..."

betty = User.create!(name: "Betty", username: "Betty123", email: "betty@mail.com", password: "Betty123*")
inez = User.create!(name: "Inez", username: "Inez123", email: "inez@mail.com", password: "Inez123*")
augustine = User.create!(name: "Augustine", username: "Augustine123", email: "augustine@mail.com", password: "Augustine123*")

puts "done seeding users!"

# artists

puts "seeding artists..."
# 1-10
leonardo_da_vinci = Artist.create!(name: "Leonardo da Vinci", nationality: "Italian", born: "1452", died: "1519")
johannes_vermeer = Artist.create!(name: "Johannes Vermeer", nationality: "Dutch", born: "1632", died: "1675")
vincent_van_gogh = Artist.create!(name: "Vincent van Gogh", nationality: "Dutch", born: "1853", died: "1890")
masaccio = Artist.create!(name: "Masaccio", nationality: "Italian", born: "1401", died: "1428")
annibale_carracci = Artist.create!(name: "Annibale Carracci", nationality: "Italian", born: "1560", died: "1609")
prudhon = Artist.create!(name: "Pierre-Paul Prud'hon", nationality: "French", born: "1758", died: "1823")
derain = Artist.create!(name: "André Derain", nationality: "French", born: "1880", died: "1954")
pollock = Artist.create!(name: "Jackson Pollock", nationality: "American", born: "1912", died: "1956")
unknown_1 = Artist.create!(name: "Unknown", nationality: "", born: "", died: "")
uccello = Artist.create!(name: "Paulo Uccello", nationality: "Italian", born: "1397", died: "1475")
# 11-20
caravaggio = Artist.create!(name: "Michelangelo Merisi da Caravaggio", nationality: "Italian", born: "1571", died: "1610")
delacroix = Artist.create!(name: "Eugène Delacroix", nationality: "French", born: "1798", died: "1863")
nolde = Artist.create!(name: "Emil Nolde", nationality: "German", born: "1867", died: "1956")
fautrier = Artist.create!(name: "Jean Fautrier", nationality: "French", born: "1898", died: "1964")
sumerian = Artist.create!(name: "Sumerian", nationality: "", born: "c. 3400 BCE", died: "c. 2000 BCE")
michelangelo = Artist.create!(name: "Michelangelo", nationality: "Italian", born: "1475", died: "1564")
elsheimer = Artist.create!(name: "Adam Elsheimer", nationality: "German", born: "1578", died: "1610")
goya = Artist.create!(name: "Francisco de Goya", nationality: "Spanish", born: "1746", died: "1828")
kokoschka = Artist.create!(name: "Oskar Kokoschka", nationality: "Austrian", born: "1886", died: "1980")
frankenthaler = Artist.create!(name: "Helen Frankenthaler", nationality: "American", born: "1928", died: "2011")
#21-30
egyptian_funeral_art = Artist.create!(name: "Egyptian Funeral Art", nationality: "", born: "c. 2920 BCE", died: "c. 332 BCE")
giovanni_bellini = Artist.create!(name: "Giovanni Bellini", nationality: "Italian", born: "c. 1430-1435", died: "1516")
vouet = Artist.create!(name: "Simon Vouet", nationality: "French", born: "1590", died: "1649")
friedrich = Artist.create!(name: "Caspar David Friedrich", nationality: "German", born: "1774", died: "1840")
braque = Artist.create!(name: "Georges Braque", nationality: "French", born: "1882", died: "1963")
fontana = Artist.create!(name: "Lucio Fontana", nationality: "Italian, Argentinian", born: "1899", died: "1968")
india = Artist.create!(name: "Ancient India", nationality: "", born: "c. 2500 BCE", died: "c. 185 BCE")
sluter = Artist.create!(name: "Claus Sluter", nationality: "Dutch", born: "c. 1350", died: "1405/1406")
montañés = Artist.create!(name: "Juan Martínez Montañés", nationality: "Spanish", born: "1568", died: "1649")
von_cornelius = Artist.create!(name: "Peter von Cornelius", nationality: "German", born: "1783", died: "1867")
# 31-40
balla = Artist.create!(name: "Giacomo Balla", nationality: "Italian", born: "1871", died: "1958")
richard_hamilton = Artist.create!(name: "Richard Hamilton", nationality: "English", born: "1922", died: "2011")
aegean = Artist.create!(name: "Aegean", nationality: "Ancient Greece", born: "c. 3000 BCE", died: "C. 1100 BCE")
gerard_david = Artist.create!(name: "Gerard David", nationality: "Flemish", born: "c. 1460", died: "1523")
peter_paul_rubens = Artist.create!(name: "Peter Paul Rubens", nationality: "Flemish", born: "1577", died: "1640")
william_blake = Artist.create!(name: "William Blake", nationality: "English", born: "1757", died: "1827")
robert_delaunay = Artist.create!(name: "Robert Delaunay", nationality: "French", born: "1885", died: "1941")
jean_tinguely = Artist.create!(name: "Jean Tinguely", nationality: "Swiss", born: "1925", died: "1991")
etruscan = Artist.create!(name: "Etruscan", nationality: "", born: "c. 8th century BCE", died: "2nd century BCE")
stefan_lochner = Artist.create!(name: "Stefan Lochner", nationality: "German", born: "c. 1410", died: "1451")

# masaccio = Artist.create!(name: "", nationality: "", born: "", died: "")



puts "done seeding artists!"

# paintings

puts "seeding paintings..."
# 1-10
mona_lisa = Painting.create!(name: "Mona Lisa", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/540px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg", period: "Italian Renaissance", date: "c. 1503-1506", location: "Louvre Museum, Paris", medium: "oil on poplar panel", dimensions: "77 cm x 53 cm (30 in x 21 in)", artist_id: Artist.first.id)
girl_with_a_pearl_earring = Painting.create!(name: "Girl with a Pearl Earring", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/540px-1665_Girl_with_a_Pearl_Earring.jpg", period: "Dutch Golden Age", date: "c. 1665", location: "Mauritshuis, The Hague", medium: "oil on canvas", dimensions: "44.5 cm x 39 cm (17.5 in x 15 in)", artist_id: Artist.second.id)
starry_night = Painting.create!(name: "The Starry Night", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/700px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg", period: "Post-Impressionism", date: "c. 1889", location: "The Museum of Modern Art, New York", medium: "oil on canvas", dimensions: "73.7 cm x 92.1 cm (29.01 in x 36.26 in)", artist_id: Artist.third.id)
tribute_money = Painting.create!(name: "The Tribute Money", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Masaccio7.jpg/540px-Masaccio7.jpg", period: "Italian Renaissance", date: "c. 1425", location: "Brancacci Chapel, Florence", medium: "fresco", dimensions: "247 cm x 597 cm (97.2 in x 235 in)", artist_id: Artist.fourth.id)
flight_into_egypt = Painting.create!(name: "Flight into Egypt", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Annibale_Carracci_003.jpg/600px-Annibale_Carracci_003.jpg", period: "Baroque", date: "c. 1604", location: "Galleria Doria Pamphilj, Rome", medium: "oil on canvas", dimensions: "122 cm x 230 cm (48 in x 91 in", artist_id: Artist.fifth.id)
portrait_of_the_empress_josephine = Painting.create!(name: "Portrait of the Empress Josephine", image: "https://www.napoleon.org/wp-content/thumbnails/uploads/2012/10/462771_1-tt-width-365-height-500-crop-1-bgcolor-ffffff-lazyload-0.jpg", period: "French Romanticism", date: "1805", location: "Louvre Musem, Paris", medium: "oil on canvas", dimensions: "96 x 70 in", artist_id: Artist.find(6).id)
barge_on_the_thames = Painting.create!(name: "Barge on the Thames", image: "https://d3d00swyhr67nd.cloudfront.net/w944h944/collection/WYL/LMG/WYL_LMG_100016-001.jpg", period: "Fauvism", date: "1906", location: "Leeds, England", medium: "oil on canvas", dimensions: "31.75 x 38.75 in", artist_id: Artist.find(7).id)
eyes_in_the_heat = Painting.create!(name: "Eyes in the Heat (Sounds in the Grass Series)", image: "https://www.guggenheim.org/wp-content/uploads/1946/01/76.2553.149_ph_web-1.jpg", period: "Abstract Expressionism", date: "1946", location: "Peggy Guggenheim Foundation, Venice, Italy", medium: "oil on canvas", dimensions: "54 x 43 in", artist_id: Artist.find(8).id)
shaft_of_the_dead_man = Painting.create!(name: "The Shaft of the Dead Man", image: "http://www.visual-arts-cork.com/images/prehistoric-altamira3.jpg", period: "Prehistoric Art", date: "c. 17,000 BCE", location: "Lascaux, Dordogne, Franch", medium: "rock painting", dimensions: "", artist_id: Artist.find(9).id)
hunt_in_the_forest = Painting.create!(name: "The Hunt in the Forest", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Hunt_in_the_forest_by_paolo_uccello.jpg/800px-Hunt_in_the_forest_by_paolo_uccello.jpg", period: "Italian Renaissance", date: "1460s", location: "Ashmolean, Oxford, England", medium: "oil on panel", dimensions: "28.75 x 70 in", artist_id: Artist.find(10).id)
# 11-20
beheading_of_saint_john_the_baptist = Painting.create!(name: "Beheading of St. John the Baptist", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/La_decapitaci%C3%B3n_de_San_Juan_Bautista%2C_por_Caravaggio.jpg/540px-La_decapitaci%C3%B3n_de_San_Juan_Bautista%2C_por_Caravaggio.jpg", period: "Italian Baroque", date: "1608", location: "Co-Cathedral of St. John, Valletta, Malta", medium: "oil on canvas", dimensions: "142 x 205 in", artist_id: Artist.find(11).id)
liberty_leading_the_people = Painting.create!(name: "Liberty Leading the People", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/600px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg", period: "French Romanticism", date: "1830", location: "Louvre, Paris", medium: "oil on canvas", dimensions: "102 x 128 in", artist_id: Artist.find(12).id)
pentecost = Painting.create!(name: "Pentecost", image: "https://uploads4.wikiart.org/images/emil-nolde/pentecast-1909.jpg", period: "German Expressionsim", date: "1909", location: "private collection", medium: "oil on canvas", dimensions: "34.25 x 42.25 in", artist_id: Artist.find(13).id)
the_jewess = Painting.create!(name: "The Jewess", image: "https://uploads6.wikiart.org/images/jean-fautrier/la-juive-1943.jpg", period: "Postwar Europe", date: "1943", location: "Musée d'Art Moderne de la Ville, Paris", medium: "oil on canvas", dimensions: "45.75 x 287.25 in", artist_id: Artist.find(14).id)
standard_of_ur = Painting.create!(name: "The Standard of Ur", image: "https://media.britishmuseum.org/media/Repository/Documents/2014_9/30_13/8eb81f0f_4896_4cfa_a372_a3b600e5be8e/mid_00012551_001.jpg", period: "Ancient Near East", date: "c. 2600-2400 BCE", location: "British Museum, London", medium: "shell, lapis lazuli, and red limestone", dimensions: "10.25 in high", artist_id: Artist.find(15).id)
creation_of_adam = Painting.create!(name: "The Creation of Adam", image: "https://uploads1.wikiart.org/images/michelangelo/sistine-chapel-ceiling-creation-of-adam-1510.jpg!Large.jpg", period: "High Renaissance", date: "1511", location: "Sistine Chapel ceiling, Vatican City", medium: "fresco", dimensions: "280 x 570 cm", artist_id: Artist.find(16).id)
mocking_of_ceres = Painting.create!(name: "The Mocking of Ceres", image: "https://uploads2.wikiart.org/00340/images/adam-elsheimer/mocking-of-ceres.jpg!Large.jpg", period: "Baroque", date: "c. 1607", location: "Prado, Madrid", medium: "oil on copper", dimensions: "11.75 x 9.75 in", artist_id: Artist.find(17).id)
third_of_may_1888 = Painting.create!(name: "The Third of May, 1888", image: "https://uploads4.wikiart.org/images/francisco-goya/execution-of-the-defenders-of-madrid-3rd-may-1808-1814.jpg!Large.jpg", period: "Spanish Romanticism", date: "1814", location: "Prado, Madrid", medium: "oil on canvas", dimensions: "102.5 x 136 in", artist_id: Artist.find(18).id)
adolf_loos = Painting.create!(name: "Adolf Loos", image: "https://uploads2.wikiart.org/images/oskar-kokoschka/adolf-loos-1909.jpg!Large.jpg", period: "Prewar Vienna", date: "1909", location: "Schloss Charlottenberg, Berlin", medium: "oil on canvas", dimensions: "29.25 x 36.75 in", artist_id: Artist.find(19).id)
lorelei = Painting.create!(name: "Lorelei", image: "https://d7hftxdivxxvm.cloudfront.net/?height=647&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F_8IjJ8bSRZG_94VTPA3WfQ%2Fnormalized.jpg&width=800", period: "Abstract Expressionism", date: "1957", location: "Brooklyn Museum of Art, New York", medium: "oil on unprimed canvas", dimensions: "70.5 x 86.625 in", artist_id: Artist.find(20).id)
# 21-30
fowling_in_the_marshes = Painting.create!(name: "Fowling in the Marshes", image: "https://www.dailyartmagazine.com/wp-content/uploads/2021/10/cropped-1-Banner-1536x864.jpg", period: "Ancient Egypt", date: "18th dynasty (c. 1350 BCE)", location: "British Museum, London", medium: "wall painting", dimensions: "38.625 x 32.75 x 8.75 in", artist_id: Artist.find(21).id)
altarpiece_of_san_giobbe = Painting.create!(name: "Altarpiece of San Giobbe", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Accademia_-_Pala_di_San_Giobbe_by_Giovanni_Bellini.jpg/600px-Accademia_-_Pala_di_San_Giobbe_by_Giovanni_Bellini.jpg", period: "Venetian Renaissance", date: "c. 1480-1490", location: "Gallerie dell'Accademia, Venice", medium: "tempera and oil on panel", dimensions: "185 x 102 in", artist_id: Artist.find(22).id)
presentation_in_the_temple = Painting.create!(name: "The Presentation in the Temple", image: "https://uploads7.wikiart.org/00298/images/simon-vouet/vouet-temple-louvre.jpg!Large.jpg", period: "French Baroque", date: "1641", location: "Louvre, Paris", medium: "oil on canvas", dimensions: "154.75 x 98.375 in", artist_id: Artist.find(23).id)
wanderer_above_the_sea_of_fog = Painting.create!(name: "The Wanderer Above the Sea of Fog", image: "https://uploads0.wikiart.org/images/caspar-david-friedrich/the-wanderer-above-the-sea-of-fog.jpg!Large.jpg", period: "German Romanticism", date: "c. 1818", location: "Kunsthalle, Hamburg, Germany", medium: "oil on canvas", dimensions: "38.75 x 29.5 in", artist_id: Artist.find(24).id)
le_portugais = Painting.create!(name: "Le Portugais (The Portuguese)", image: "https://uploads1.wikiart.org/images/georges-braque/portuguese-1911.jpg!Large.jpg", period: "Cubism", date: "1911", location: "Kunstmuseum, Basel, Switzerland", medium: "oil on canvas", dimensions: "46.125 x 32.25 in", artist_id: Artist.find(25).id)
spatial_concept = Painting.create!(name: "Spatial Concept", image: "https://uploads6.wikiart.org/00125/images/lucio-fontana/2015-10-08-1444320964-3666979-luciofontanaconcettospazialeattese1964.jpg!Large.jpg", period: "Minimal Art", date: "1964", location: "", medium: "", dimensions: "", artist_id: Artist.find(26).id)
seal_from_mohenjo_daro = Painting.create!(name: "Seal from Mohenjo-Daro", image: "https://images-cdn.bridgemanimages.com/api/1.0/image/600wm.EAM.3199710.7055475/176734.jpg", period: "Ancient India", date: "c. 2300 BCE", location: "National Museum of Pakistan, Karachi", medium: "stone", dimensions: "", artist_id: Artist.find(27).id)
well_of_moses = Painting.create!(name: "The Well of Moses", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/David_ANd_Jeremiah_from_the_Well_Of_Moses.jpg/520px-David_ANd_Jeremiah_from_the_Well_Of_Moses.jpg", period: "Northern Renaissance", date: "1395-1403", location: "Chartreuse de Champmol, Dijon, France", medium: "stone", dimensions: "height 72 in", artist_id: Artist.find(28).id)
merciful_christ = Painting.create!(name: "The Merciful Christ", image: "https://cdn.smarthistory.org/wp-content/uploads/2018/03/cristo_de_los_calices-edited.jpg", period: "Spanish Baroque", date: "1603-1606", location: "Sacristy of the Chalices, Seville Cathedral, Spain", medium: "painted wood", dimensions: "life-size", artist_id: Artist.find(29).id)
wise_and_foolish_virgins = Painting.create!(name: "The Wise and Foolish Virgins", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Peter_von_Cornelius_-_The_Parable_of_Wise_and_Foolish_Virgins_%28unfinished%29_-_Google_Art_Project.jpg/1600px-Peter_von_Cornelius_-_The_Parable_of_Wise_and_Foolish_Virgins_%28unfinished%29_-_Google_Art_Project.jpg?20121009181745", period: "The Nazarenes", date: "c. 1813", location: "Kunstmuseum, Düsseldorf, Germany", medium: "oil on canvas", dimensions: "44.88 x 60.23 in", artist_id: Artist.find(30).id)
# 31-40
street_light = Painting.create!(name: "Street Light", image: "https://uploads2.wikiart.org/images/giacomo-balla/street-light-1909.jpg!Large.jpg", period: "Futurism", date: "1909-1911", location: "MoMA, New York", medium: "oil on canvas", dimensions: "69 x 45 in", artist_id: Artist.find(31).id)
just_what_is_it_about_todays_homes = Painting.create!(name: "Just What Is it That Made Today's Homes So Different, So Appealing?", image: "https://uploads3.wikiart.org/images/richard-hamilton/http-en-wikipedia-org-wiki-file-hamilton-appealing2-jpg-1956.jpg!Large.jpg", period: "Pop Art", date: "1956", location: "Kunsthalle, Tübingen, Germany", medium: "collage", dimensions: "10.25 x 9.375 in", artist_id: Artist.find(32).id)
mask_of_agamemnon = Painting.create!(name: "Mask of Agamemnon", image: "https://www.metmuseum.org/-/media/images/blogs/now-at-the-met/2011/2011_05/abramitis-figure-1.jpg?as=1&mh=1086&mw=1058&hash=440DE8009D219B70133127DCB181014B", period: "Ancient Greece", date: "16th century BCE", location: "National Archaeological Museum, Athens, Greece", medium: "gold", dimensions: "height 10.25", artist_id: Artist.find(33).id)
madonna_and_child_crowned_by_two_angels = Painting.create!(name: "Madonna and Child Crowned by Two Angels", image: "https://uploads4.wikiart.org/images/gerard-david/triptych-of-the-sedano-family.jpg!Large.jpg", period: "Northern Renaissance", date: "c. 1495-1498", location: "Louvre, Paris", medium: "oil on panel", dimensions: "38.25 x 57 in", artist_id: Artist.find(34).id)
rape_of_the_daughters_of_leucippus = Painting.create!(name: "The Rape of the Daughters of Leucippus", image: "https://uploads5.wikiart.org/00380/images/peter-paul-rubens/rape-of-the-daughters-of-leucippus-oil-on-canvas-peter-paul-rubens.jpg!Large.jpg", period: "Flemish Baroque", date: "c. 1618", location: "Alte Pinakothek, Munich, Germany", medium: "oil on canvas", dimensions: "88 x 83 in", artist_id: Artist.find(35).id)
ancient_of_days = Painting.create!(name: "The Ancient of Days", image: "https://uploads0.wikiart.org/images/william-blake/the-ancient-of-days-1794.jpg!Large.jpg", period: "English Visionaries, Romanticism", date: "1794 (original)", location: "private collection (original)", medium: "etching with gouache and watercolor", dimensions: "9.25 x 6.75 in", artist_id: Artist.find(36).id)
la_ville_de_paris = Painting.create!(name: "La Ville de Paris", image: "https://uploads4.wikiart.org/images/robert-delaunay/the-city-of-paris.jpg!Large.jpg", period: "Orphism", date: "1910-1912", location: "Pompidou Centre, Paris", medium: "oil on canvas", dimensions: "105 x 159.75 in", artist_id: Artist.find(37).id)
meta_matic = Painting.create!(name: "Meta-Matic No. 14", image: "https://uploads5.wikiart.org/images/jean-tinguely/m-ta-matic-no-14-1959.jpg", period: "Kinetic Art", date: "1959", location: "", medium: "wood, metal, rubber", dimensions: "", artist_id: Artist.find(38).id)
sarcophagus_of_married_couple = Painting.create!(name: "Sarcophagus of a Married Couple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sarcophagus_of_the_Spouses_from_Villa_Giulia_in_Rome.jpg/600px-Sarcophagus_of_the_Spouses_from_Villa_Giulia_in_Rome.jpg", period: "Etruscan Art", date: "c. 520 - 510 BCE", location: "Louvre, Paris", medium: "terracotta", dimensions: "43.75 x 76.5 in", artist_id: Artist.find(39).id)
adoration_of_christ = Painting.create!(name: "The Adoration of Christ", image: "https://uploads6.wikiart.org/00311/images/stefan-lochner/stefan-lochner-nativity.jpg!Large.jpg", period: "German Renaissance", date: "c. 1445", location: "Alte Pinakothek, Munich, Germany", medium: "oil on panel", dimensions: "15 x 9.25 in", artist_id: Artist.find(40).id)


# tribute_money = Painting.create!(name: "", image: "", period: "", date: "", location: "", medium: "", dimensions: "", artist_id: Artist.find().id)


puts "done seeding paintings!"

#comments

puts "seeding comments..."

pretty = Comment.create!(content: "pretty", date: "03/15/2023", user_id: User.first.id, painting_id: Painting.first.id)
cool = Comment.create!(content: "super cool", date: "02/18/2022", user_id: User.first.id, painting_id: Painting.second.id)
old = Comment.create!(content: "wow hella old", date: "09/29/2022", user_id: User.third.id, painting_id: Painting.third.id)

puts "done seeding comments!"

# favorites

puts 'seeding favorites...'

fav1 = Favorite.create!(user_id: User.first.id, painting_id: Painting.second.id)
fav2 = Favorite.create!(user_id: User.first.id, painting_id: Painting.third.id)
fav3 = Favorite.create!(user_id: User.second.id, painting_id: Painting.second.id)
fav4 = Favorite.create!(user_id: User.third.id, painting_id: Painting.first.id)
fav5 = Favorite.create!(user_id: User.third.id, painting_id: Painting.third.id)

puts "DONE SEEDING WOOHOO"