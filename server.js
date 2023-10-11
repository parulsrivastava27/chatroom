require('dotenv').config();
const { Server } = require('http'); // Use Server from http module
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/users');

const app = express();

// Create an HTTP server from the express app
const server = new Server(app);
const io = socketio(server);

// Set static folder
app.use(express.static('public')); // Vercel will automatically serve files from 'public'

const botName = 'ChatCord Bot';

// Export the Express app as a function
module.exports = app;

// Code for your socket.io functionality remains unchanged

const port = process.env.PORT || 3000;

// We don't need the server to listen here, as Vercel handles this for you
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
