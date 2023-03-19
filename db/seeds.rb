User.delete_all
Painting.delete_all
Artist.delete_all
Comment.delete_all
Favorite.delete_all

puts "here we go..."

# users
puts "seeding users..."

betty = User.create(name: "Betty", username: "Betty123", email: "betty@mail.com", password: "Betty123*")
inez = User.create(name: "Inez", username: "Inez123", email: "inez@mail.com", password: "Inez123*")
augustine = User.create(name: "Augustine", username: "Augustine123", email: "augustine@mail.com", password: "Augustine123*")

puts "done seeding users!"

# paintings

puts "seeding paintings..."

mona_lisa = Painting.create(name: "Mona Lisa", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/540px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg", department: "", period: "", culture: "", date: "c. 1503-1506", medium: "oil on poplar panel", dimensions: "77 cm x 53 cm (30 in x 21 in)", tags: [], user_favorite: false, user_seen: false, user_bucketlist: false, artist_id: 1)

girl_with_a_pearl_earring = Painting.create(name: "Girl with a Pearl Earring", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/540px-1665_Girl_with_a_Pearl_Earring.jpg", department: "", period: "", culture: "", date: "c. 1665", medium: "oil on canvas", dimensions: "44.5 cm x 39 cm (17.5 in x 15 in)", tags: [], user_favorite: false, user_seen: false, user_bucketlist: false, artist_id: 2)

starry_night = Painting.create(name: "The Starry Night", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/700px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg", department: "", period: "", culture: "", date: "c. 1889", medium: "oil on canvas", dimensions: "73.7 cm x 92.1 cm (29.01 in x 36.26 in)", tags: "", user_favorite: false, user_seen: false, user_bucketlist: false, artist_id: 3)

puts "done seeding paintings!"

#comments

puts "seeding comments..."

pretty = Comment.create(content: "pretty", date: "03/15/2023", user_id: 1, painting_id: 1)
cool = Comment.create(content: "super cool", date: "02/18/2022", user_id: 2, painting_id: 2)
old = Comment.create(content: "wow hella old", date: "09/29/2022", user_id: 3, painting_id: 3)

puts "done seeding comments!"

# artists

puts "seeding artists..."

leonardo_da_vinci = Artist.create(name: "Leonardo da Vinci", nationality: "Italian", born: "1452", died: "1519")
johannes_vermeer = Artist.create(name: "Johannes Vermeer", nationality: "Dutch", born: "1632", died: "1675")
vincent_van_gogh = Artist.create(name: "Vincent van Gogh", nationality: "Dutch", born: "1853", died: "1890")

puts "done seeding artists!"

# favorites

puts 'seeding favorites...'

fav1 = Favorite.create(user_id: 1, painting_id: 2)
fav2 = Favorite.create(user_id: 1, painting_id: 3)
fav3 = Favorite.create(user_id: 2, painting_id: 2)
fav4 = Favorite.create(user_id: 3, painting_id: 1)
fav5 = Favorite.create(user_id: 3, painting_id: 3)

puts "DONE SEEDING WOOHOO"