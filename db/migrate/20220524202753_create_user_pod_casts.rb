class CreateUserPodCasts < ActiveRecord::Migration[6.1]
  def change
    create_table :user_pod_casts do |t|
      t.integer :user_id
      t.integer :pod_cast_id

      t.timestamps
    end
  end
end
