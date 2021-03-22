'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('buyers', [
            {
                profileId: 3,
                name: 'Žan',
                surname: 'Starašinič',
                location: 'mEtLiKa',
                email: 'zan@starasinic.com',
                telephone: '070411432'
            },
            {
                profileId: 1,
                name: 'Vid',
                surname: 'Bukovec',
                location: 'Dvor 102, 8361 Dvor',
                email: 'vid.bukovec8361@gmail.com',
                telephone: '070512152'
            }
        ])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('buyers');
    }
};
