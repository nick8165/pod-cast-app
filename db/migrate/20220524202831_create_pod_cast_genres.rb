class CreatePodCastGenres < ActiveRecord::Migration[6.1]
  def change
    create_table :pod_cast_genres do |t|
      t.integer :pod_cast_id
      t.integer :genre_id

      t.timestamps
    end
  end
end
