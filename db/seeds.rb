puts "here we go..."

# users
puts "seeding users..."

betty = User.create(name: "Betty", username: "Betty123", email: "betty@mail.com", password: "Betty123*")
inez = User.create(name: "Inez", username: "Inez123", email: "inez@mail.com", password: "Inez123*")
augustine = User.create(name: "Augustine", username: "Augustine123", email: "augustine@mail.com", password: "Augustine123*")

puts "done seeding users!"

# paintings

puts "seeding paintings..."

sunset = Painting.create(name: "Sunset", image: "", department: "The American Wing", period: "", culture: "American", date: "1905-1906", medium: "Watercolor, gouache, and graphite on white wove paper", dimensions: "12 7/16 x 18 1/2 in. (31.6 x 47 cm)", tags: ["Landscapes"], user_favorite: false, user_seen: false, user_bucketlist: false, artist_id: 2)

piece = Painting.create(name: "Piece", image: "", department: "Asian Art", period: "", culture: "Japan", date: "17th century", medium: "Silk / Compound weave", dimensions: "8 1/4 x 1 3/4 in. (21 x 4.4 cm)", tags: ["Flowers"], user_favorite: false, user_seen: false, user_bucketlist: false, artist_id: 1)

ring = Painting.create(name: "Large Ring with Figural Decoration", image: "", department: "Asian Art", period: "Bronze and Iron Age period", culture: "Vietnam (North, Highlands)", date: "500 BCE - 300 CE", medium: "Bronze", dimensions: "H. 7/8 in. (2.2 cm); W. 4 7/8 in. (12.4 cm); Diam. 4 in. (10.2 cm)", tags: "", user_favorite: false, user_seen: false, user_bucketlist: false, artist_id: 1)

puts "done seeding paintings!"

#comments

puts "seeding comments..."

pretty = Comment.create(content: "pretty", date: "03/15/2023", user_id: 1, painting_id: 1)
cool = Comment.create(content: "super cool", date: "02/18/2022", user_id: 2, painting_id: 2)
old = Comment.create(content: "wow hella old", date: "09/29/2022", user_id: 3, painting_id: 3)

puts "done seeding comments!"

# artists

puts "seeding artists..."

unknown = Artist.create(name: "unknown", nationality: "see artwork for more info", born: "unknown", died: "unknown")
sargent = Artist.create(name: "John Singer Sargent", nationality: "American", born: "1856", died: "1905")
wright = Artist.create(name: "Frank Lloyd Wright", nationality: "American", born: "1867", died: "1959")

puts "done seeding artists!"

puts "DONE SEEDING WOOHOO"

# puts "here we go..."

# # users
# puts "seeding users..."

# betty = User.create(name: "Betty", username: "Betty123", email: "betty@mail.com", password: "Betty123*")
# inez = User.create(name: "Inez", username: "Inez123", email: "inez@mail.com", password: "Inez123*")
# augustine = User.create(name: "Augustine", username: "Augustine123", email: "augustine@mail.com", password: "Augustine123*")

# puts "done seeding users!"

# # paintings
# ce = Painting.create(name: "Piece", image: "", department: "Asian Art", period: "", culture: "Japan", date: "17th century", medium: "Silk / Compound weave", dimensions: "8 1/4 x 1 3/4 in. (21 x 4.4 cm)", tags: ["Flowers"], user_favorite: false, user_seen: false, user_bucketlist: false, artist_id: NULL)

# ring = Painting.create(name: "Large Ring with Figural Decoration", image: "", department: "Asian Art", period: "Bronze and Iron Age period", culture: ,"Vietnam (North, Highlands)" date: "500 BCE - 300 CE", medium: "Bronze", dimensions: "H. 7/8 in. (2.2 cm); W. 4 7/8 in. (12.4 cm); Diam. 4 in. (10.2 cm)", tags: null, user_favorite: false, user_seen: false, user_bucketlist: false, artist_id: NULL)

# puts "done seeding paintings!"

# #comments

# puts "seeding comments..."

# pretty = Comment.create(content: "pretty", date: "03/15/2023", user_id: 1, painting_id: 1)
# cool = Comment.create(content: "super cool", date: "02/18/2022", user_id: 2, painting_id: 2)
# old = Comment.create(content: "wow hella old", date: "09/29/2022", user_id: 3, painting_id: 3)

# puts "done seeding comments!"

# # artists

# puts "seeding artists..."

# unknown = Artist.create(name: "unknown", nationality: "see artwork for more info", born: "unknown", died: "unknown")
# sargent = Artist.create(name: "John Singer Sargent", nationality: "American", born: "1856", died: "1905")
# wright = Artist.create(name: "Frank Lloyd Wright", nationality: "American", born: "1867", died: "1959")

# puts "done seeding artists!"

# puts "DONE SEEDING WOOHOO"
# puts "seeding paintings..."

# sunset = Painting.create(name: "Sunset", image: "", department: "The American Wing", period: "", culture: "American", date: "1905-1906", medium: "Watercolor, gouache, and graphite on white wove paper", dimensions: "12 7/16 x 18 1/2 in. (31.6 x 47 cm)", tags: ["Landscapes"], user_favorite: false, user_seen: false, user_bucketlist: false, artist_id: 2)

# pie