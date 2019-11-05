### groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

### usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|
|e-mail|string|null: false, foreign_key: true|
|password|string|null: false|
|name|string|null: false|

### Association
- has_many :groups, through: :groups_users
- has_many :messages
- has_many :group_users


### groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|
|name|string|null: false|

### Association
- has_many :users, through: :groups_users
- has_many :messages
- has many :groups_users

### messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user