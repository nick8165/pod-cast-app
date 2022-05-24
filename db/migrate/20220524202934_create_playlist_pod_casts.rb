class CreatePlaylistPodCasts < ActiveRecord::Migration[6.1]
  def change
    create_table :playlist_pod_casts do |t|
      t.integer :playlist_id
      t.integer :pod_cast_id

      t.timestamps
    end
  end
end
