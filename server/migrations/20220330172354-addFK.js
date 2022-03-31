'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('Notes', 'room_id', 'roomId');
    await queryInterface.renameColumn('Notes', 'user_id', 'userId');
    await queryInterface.renameColumn(
      'Rooms',
      'number_of_lectures',
      'numberOfLectures'
    );
    await queryInterface.renameColumn('Rooms', 'user_id', 'userId');
    await queryInterface.renameColumn('Rooms', 'is_full', 'isFull');
    await queryInterface.renameColumn(
      'Rooms',
      'number_of_persons',
      'numberOfPersons'
    );
    await queryInterface.renameColumn('Rooms', 'start_date', 'startDate');
    await queryInterface.renameColumn('Rooms', 'end_date', 'endDate');
    await queryInterface.renameColumn('Messages', 'origin_id', 'originId');
    await queryInterface.renameColumn('Messages', 'target_id', 'targetId');
    await queryInterface.renameColumn('Messages', 'read_check', 'readCheck');
    await queryInterface.renameColumn('Messages', 'send_at', 'sendAt');
    await queryInterface.renameColumn('Mates', 'room_id', 'roomId');
    await queryInterface.renameColumn('Mates', 'user_id', 'userId');
    await queryInterface.renameColumn('Likes', 'room_id', 'roomId');
    await queryInterface.renameColumn('Likes', 'target_id', 'targetId');
    await queryInterface.renameColumn('Likes', 'user_id', 'userId');
    await queryInterface.renameColumn('Room_tags', 'room_id', 'roomId');
    await queryInterface.renameColumn('Room_tags', 'tag_id', 'tagId');

    await queryInterface.addConstraint('Rooms', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'FK_Rooms_userId', // FK name (optional)
      references: {
        table: 'Users',
        fields: ['id'],
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('Room_tags', {
      fields: ['roomId'],
      type: 'foreign key',
      name: 'FK_Room_tags_roomId', // FK name (optional)
      references: {
        table: 'Rooms',
        fields: ['id'],
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('Room_tags', {
      fields: ['tagId'],
      type: 'foreign key',
      name: 'FK_Room_tags_tagId', // FK name (optional)
      references: {
        table: 'Tags',
        fields: ['id'],
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('Notes', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'FK_Notes_userId', // FK name (optional)
      references: {
        table: 'Users',
        fields: ['id'],
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('Notes', {
      fields: ['roomId'],
      type: 'foreign key',
      name: 'FK_Notes_roomId', // FK name (optional)
      references: {
        table: 'Rooms',
        fields: ['id'],
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('Messages', {
      fields: ['originId'],
      type: 'foreign key',
      name: 'FK_Messages_originId', // FK name (optional)
      references: {
        table: 'Users',
        fields: ['id'],
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('Messages', {
      fields: ['targetId'],
      type: 'foreign key',
      name: 'FK_Messages_targetId', // FK name (optional)
      references: {
        table: 'Users',
        fields: ['id'],
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('Mates', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'FK_Mates_userId', // FK name (optional)
      references: {
        table: 'Users',
        fields: ['id'],
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('Mates', {
      fields: ['roomId'],
      type: 'foreign key',
      name: 'FK_Mates_roomId', // FK name (optional)
      references: {
        table: 'Rooms',
        fields: ['id'],
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('Likes', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'FK_Likes_userId', // FK name (optional)
      references: {
        table: 'Users',
        fields: ['id'],
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('Likes', {
      fields: ['targetId'],
      type: 'foreign key',
      name: 'FK_Likes_targetId', // FK name (optional)
      references: {
        table: 'Users',
        fields: ['id'],
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('Likes', {
      fields: ['roomId'],
      type: 'foreign key',
      name: 'FK_Likes_roomId', // FK name (optional)
      references: {
        table: 'Rooms',
        fields: ['id'],
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Rooms', 'FK_Rooms_userId');
    await queryInterface.removeConstraint('Room_tags', 'FK_Room_tags_roomId');
    await queryInterface.removeConstraint('Room_tags', 'FK_Room_tags_tagId');
    await queryInterface.removeConstraint('Notes', 'FK_Notes_userId');
    await queryInterface.removeConstraint('Notes', 'FK_Notes_roomId');
    await queryInterface.removeConstraint('Messages', 'FK_Messages_originId');
    await queryInterface.removeConstraint('Messages', 'FK_Messages_targetId');
    await queryInterface.removeConstraint('Mates', 'FK_Mates_userId');
    await queryInterface.removeConstraint('Mates', 'FK_Mates_roomId');
    await queryInterface.removeConstraint('Likes', 'FK_Likes_userId');
    await queryInterface.removeConstraint('Likes', 'FK_Likes_targetId');
    await queryInterface.removeConstraint('Likes', 'FK_Likes_roomId');
  },
};
