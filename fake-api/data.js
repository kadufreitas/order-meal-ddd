let currentEntryId = 1;
// id: currentEntryId++,
//       date: new Date('2023-01-01'),
//       items: [
//         {
//           meal: {
//             id: 'meal-1',
//             protein: 'Chicken',
//             base: 'Rice',
//             legumes: 'Lentils',
//             followUp: 'Fruit',
//           },
//           quantity: 2,
//         },
//       ],
//       total: 10.99,
const data = {
  menu: {
    id: 1,
    name: 'Menu 1',
    protein: ['Chicken', 'Beef', 'Pork'],
    base: ['Rice', 'Pasta', 'Quinoa'],
    legumes: ['Lentils', 'Beans', 'Quinoa'],
    followUp: ['Fruit', 'Vegetables', 'Nuts'],
    dateStart: new Date('2023-01-01'),
    dateEnd: new Date('2023-01-31'),
  },
};

const addEntry = (newEntry) => {
  const entry = {
    ...newEntry,
    id: currentEntryId + 1,
  };

  validateEntry(entry);

  data.entries.push(entry);
  currentEntryId++;

  return entry;
};

const updateEntry = (entryId, changeset) => {
  const idExists = data.entries.some((entry) => entry.id === entryId);

  if (!idExists) {
    throw notFoundError(entryId);
  }

  const updatedEntry = {
    id: entryId,
    ...changeset,
  };

  validateEntry(updatedEntry);

  data.entries = data.entries.map((entry) => {
    if (entry.id !== entryId) {
      return entry;
    }

    return updatedEntry;
  });

  return updatedEntry;
};

const getAll = () => data.menu;

const getEntryById = (id) => {
  const entry = data.entries.find((entry) => entry.id === id);

  if (!entry) {
    throw notFoundError(id);
  }

  return entry;
};

const validateEntry = (entry) => {
  if (typeof entry.id !== 'number') {
    throw validationError('Invalid id');
  }

  if (typeof entry.title !== 'string' || entry.title.length <= 5) {
    throw validationError(`Invalid title: ${entry.title}`);
  }

  if (typeof entry.text !== 'string' || entry.text.length <= 60) {
    throw validationError(`Invalid text ${entry.text}`);
  }
};

const validationError = (message) => {
  const error = Error(message);
  error.type = VALIDATION_ERROR;
  return error;
};

const notFoundError = (id) => {
  const error = Error(`Entry ${id} not found`);
  error.type = NOT_FOUND_ERROR;
  return error;
};

const VALIDATION_ERROR = 'VALIDATION_ERROR';
const NOT_FOUND_ERROR = 'NOT_FOUND_ERROR';

module.exports = {
  addEntry,
  updateEntry,
  getAll,
  getEntryById,
  VALIDATION_ERROR,
  NOT_FOUND_ERROR,
};
