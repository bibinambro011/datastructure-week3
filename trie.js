// Define the TrieNode class, representing a node in the trie.
class TrieNode {
    constructor() {
      this.children = {}; // An object to store references to child nodes.
      this.isEndOfWord = false; // A flag to indicate if this node represents the end of a word.
    }
  }
  
  // Define the Trie class, representing the trie data structure.
  class Trie {
    constructor() {
      this.root = new TrieNode(); // Create the root node of the trie.
    }
  
    // Method to insert a word into the trie.
    insert(word) {
      let node = this.root; // Start from the root node.
      for (let char of word) { // Loop through each character in the word.
        if (!node.children[char]) { // If the character doesn't exist in the children of the current node.
          node.children[char] = new TrieNode(); // Create a new node for the character.
        }
        node = node.children[char]; // Move to the next node for the next character.
      }
      node.isEndOfWord = true; // Mark the last node as the end of the inserted word.
    }
  
    // Method to search for a word in the trie.
    search(word) {
      let node = this.root; // Start from the root node.
      for (let char of word) { // Loop through each character in the word.
        if (!node.children[char]) { // If the character doesn't exist in the children of the current node.
          return false; // The word is not present in the trie, return false.
        }
        node = node.children[char]; // Move to the next node for the next character.
      }
      return node.isEndOfWord; // Return true if the last node of the word has isEndOfWord set to true.
    }
  
    // Method to check if any word in the trie starts with a given prefix.
    startsWith(prefix) {
      let node = this.root; // Start from the root node.
      for (let char of prefix) { // Loop through each character in the prefix.
        if (!node.children[char]) { // If the character doesn't exist in the children of the current node.
          return false; // No word in the trie starts with the given prefix, return false.
        }
        node = node.children[char]; // Move to the next node for the next character.
      }
      return true; // The given prefix exists as a prefix of at least one word in the trie.
    }
  }
  
  // Example usage:
  const trie = new Trie(); // Create a new trie instance.
  trie.insert("apple"); // Insert the word "apple" into the trie.
  trie.insert("app"); // Insert the word "app" into the trie.
  trie.insert("banana"); // Insert the word "banana" into the trie.
  trie.insert("bibin");
  
  // Perform searches and prefix checks on the trie.
  console.log(trie.search("apple")); // Output: true (The word "apple" is present in the trie.)
  console.log(trie.search("appl")); // Output: true (The word "app" is present in the trie.)
  console.log(trie.search("appl")); // Output: false (The word "appl" is not present in the trie.)
  console.log(trie.startsWith("app")); // Output: true (At least one word in the trie starts with "app".)
  console.log(trie.startsWith("ban")); // Output: true (At least one word in the trie starts with "ban".)
  console.log(trie.startsWith("orange")); // Output: false (No word in the trie starts with "orange".)
  console.log(trie.startsWith("bibi"))
  