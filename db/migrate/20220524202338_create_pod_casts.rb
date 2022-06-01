class CreatePodCasts < ActiveRecord::Migration[6.1]
  def change
    create_table :pod_casts do |t|
      t.string :title
      t.string :thumb_nail
      t.integer :creator_id

      t.timestamps
    end
  end
end
