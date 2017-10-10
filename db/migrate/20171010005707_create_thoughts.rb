class CreateThoughts < ActiveRecord::Migration[5.1]
  def change
    create_table :thoughts do |t|
      t.string :text
      t.string :guid

      t.timestamps
    end
  end
end
