# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PlaylistTrack.destroy_all
TrackLike.destroy_all
AlbumLike.destroy_all
Follow.destroy_all
Playlist.destroy_all
Track.destroy_all
Album.destroy_all
Artist.destroy_all
User.destroy_all

require 'open-uri'

spidey = User.create(username: 'spidey', email: 'spidey@marvel.com', password: 'parker')
miles = User.create(username: 'miles', email: 'miles@marvel.com', password: 'morales')
gwen = User.create(username: 'gwen', email: 'gwen@marvel.com', password: 'gstacy')

file_path = Rails.root.join("storage", "can.jpg")

# artists


#more artists

# andrew_matrauza = Artist.create(
#     artist_name: 'Andrew Matrauza',
#     bio: ''
# )

# ben_micheal = Artist.create(
#     artist_name: 'Ben Micheal',
#     bio: ''
# )
allan_namoko = Artist.create(
    artist_name: 'Allan Namoko',
    bio: ''
)

# annie_matumbi = Artist.create(
#     artist_name: 'Annie Matumbi',
#     bio: ''
# )

# coss_chiwalo = Artist.create(
#     artist_name: 'Coss Chiwalo',
#     bio: ''
# )

# fumbi_brothers = Artist.create(
#     artist_name: 'Fumbi Brothers',
#     bio: ''
# )

# gides_chalamanda = Artist.create(
#     artist_name: 'Gides Chalamanda',
#     bio: ''
# )

# gift_fumulani = Artist.create(
#     artist_name: 'Gift Fumulani',
#     bio: ''
# )




# photos
begin
    begin
        allan_namoko.photo.attach(io: File.open(file_path), filename: 'can.jpg')

        # andrew_matrauza.photo.attach(io: File.open(file_path), filename: 'general12.jpeg')
        # annie_matumbi.photo.attach(io: File.open(file_path), filename: 'genera31l.jpeg')
        # coss_chiwalo.photo.attach(io: File.open(file_path), filename: 'genera33l.jpeg')
        # fumbi_brothers.photo.attach(io: File.open(file_path), filename: 'gener112al.jpeg')
        # gides_chalamanda.photo.attach(io: File.open(file_path), filename: 'gene3321ral.jpeg')
        # gift_fumulani.photo.attach(io: File.open(file_path), filename: 'genera223l.jpeg')
    rescue => e
        puts "Error occurred here when attaching photo: #{e.message}"
    end
rescue => e
    puts "Error occurred here when attaching photo: #{e.message}"
end




#albums
ana_osiidwa = Album.create(
    title: 'Ana osiidwa',
    artist_id: allan_namoko.id,
    category: 'LP',
    year: 2012,
    is_explicit: false
)
ana_osiidwa.cover.attach(io: File.open(file_path), filename: 'can.jpg')

# muntengo = Album.create(
#     title: 'muntengo',
#     artist_id: andrew_matrauza.id,
#     category: 'LP',
#     year: 2012,

#     is_explicit: false
# )
# chidzukulu = Album.create(
#     title: 'chidzukulu',
#     artist_id: annie_matumbi.id,
#     category: 'LP',
#     year: 2012,
#     is_explicit: false
# )
# kadona = Album.create(
#     title: 'kadona',
#     artist_id: ben_micheal.id,
#     category: 'LP',
#     year: 2012,
#     is_explicit: false
# )

# amakonda_aliyense = Album.create(
#     title: 'Amakonda aliyense',
#     artist_id: coss_chiwalo.id,
#     category: 'LP',
#     year: 2012,
#     is_explicit: false
# )

# alipo = Album.create(
#     title: 'alipo',
#     artist_id: fumbi_brothers.id,
#     category: 'LP',
#     year: 2012,
#     is_explicit: false
# )

# andochokera = Album.create(
#     title: 'andichokera',
#     artist_id: gides_chalamanda.id,
#     category: 'LP',
#     year: 2012,
#     is_explicit: false
# )

# ndikuyiimba = Album.create(
#     title: 'ndikuyimba',
#     artist_id: allan_namoko.id,
#     category: 'LP',
#     year: 2012,
#     is_explicit: false
# )








achilekwa = Track.create(
    title: 'Achilekwa',
    artist_id: allan_namoko.id,
    album_id: ana_osiidwa.id,
    num: 3,
    seconds: 225
)





# achilekwa = Track.create(
#     title: 'Achilekwa',
#     artist_id: allan_namoko.id,
#     album_id: ana_osiidwa.id,
#     num: 3,
#     seconds: 225
# )

music_path = Rails.root.join("storage", "achilekwa.mp3")

achilekwa.audiofile.attach(io: File.open(music_path), filename: 'achilekwa.mp3')

# # track
# musatidabwise = Track.create(
#     title: 'Musatidabwise',
#     artist_id: andrew_matrauza.id,
#     album_id: muntengo.id,
#     num: 1,
#     seconds: 225
# )

# musa = URI.open('https://drive.usercontent.google.com/download?id=1OkflMu2wgdziwa5upjuUpvOI4XY1_I26&export=download&authuser=0&confirm=t&uuid=694956cc-68b0-400b-864c-1872580e98c7&at=APZUnTUkHdGPz1y-JywDdBX7EVPm:1696169281728')
# musatidabwise.audiofile.attach(io: musa, filename: 'musatidabwise.mp3')
# #

# #track
# kupepesa = Track.create(
#     title: 'kupepesa',
#     artist_id: annie_matumbi.id,
#     album_id: chidzukulu.id,
#     num: 2,
#     seconds: 225
# )
# kupe = URI.open('https://drive.usercontent.google.com/download?id=1wVGJIoSvyULnXDro2My2ToWF3dbAhhqf&export=download&authuser=0&confirm=t&uuid=f1e48c46-939d-4faa-8ba2-b40d7bcd0d04&at=APZUnTXePeNYoIrU7v-owmMmAFal:1696169495176')
# kupepesa.audiofile.attach(io: kupe, filename: 'kupepesa.mp3')
# #
