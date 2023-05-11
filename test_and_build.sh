#!/bin/bash

# Step 1: Run tests
echo "Running tests..."
python manage.py test 
tests_exit_code=$?

if [ $tests_exit_code -ne 0 ]; then
    echo "Tests failed. Aborting build process."
    exit $tests_exit_code
fi

# Step 2: Build index-bundle.js
echo "Building index-bundle.js..."
npm start dev
build_exit_code=$?

if [ $build_exit_code -ne 0 ]; then
    echo "Build failed. Aborting build process."
    exit $build_exit_code
fi

# Step 3: Copy index-bundle.js
echo "Copying index-bundle.js to Main Project"
cp index-bundle.js project/adjCOADD/static/js/ketcher/

echo "Build process completed successfully."
