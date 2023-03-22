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

leonardo_da_vinci = Artist.create!(name: "Leonardo da Vinci", nationality: "Italian", born: "1452", died: "1519")
johannes_vermeer = Artist.create!(name: "Johannes Vermeer", nationality: "Dutch", born: "1632", died: "1675")
vincent_van_gogh = Artist.create!(name: "Vincent van Gogh", nationality: "Dutch", born: "1853", died: "1890")

puts "done seeding artists!"

# paintings

puts "seeding paintings..."

mona_lisa = Painting.create!(name: "Mona Lisa", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/540px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg", period: "", date: "c. 1503-1506", medium: "oil on poplar panel", dimensions: "77 cm x 53 cm (30 in x 21 in)", user_seen: false, artist_id: Artist.first.id)

girl_with_a_pearl_earring = Painting.create!(name: "Girl with a Pearl Earring", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/540px-1665_Girl_with_a_Pearl_Earring.jpg", period: "", date: "c. 1665", medium: "oil on canvas", dimensions: "44.5 cm x 39 cm (17.5 in x 15 in)", user_seen: false, artist_id: Artist.second.id)

starry_night = Painting.create!(name: "The Starry Night", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/700px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg", period: "", date: "c. 1889", medium: "oil on canvas", dimensions: "73.7 cm x 92.1 cm (29.01 in x 36.26 in)", user_seen: false, artist_id: Artist.third.id)

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