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
|email|string|null: false, foreign_key: true|
|password|string|null: false|
|username|string|null: false|

### Association
- has_many :groups, through: :group_users
- has_many :messages
- has_many :groups


### groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|
|group_name|string|null: false|

### Association
- has_many :users, through: :group_users
- has_many :messages


### messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|
|group_id|integer|
|user_id|integer|

### Association
- belongs_to :group
- belongs_to :user
