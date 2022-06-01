class CreateEpisodes < ActiveRecord::Migration[6.1]
  def change
    create_table :episodes do |t|
      t.string :title
      t.integer :length
      t.integer :pod_cast_id
      t.timestamps
    end
  end
end
