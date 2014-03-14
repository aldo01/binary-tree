/**
 * Creates a new binary search tree.
 */
function BinarySearchTree() {
			
	this.root;
	this.height = null;
	
	/*
	 * Accepts a key as an argument, and either creates a new 
	 * BinarySearchNode in the root position, or passes the key to the 
	 * root node to be handled by subsequent nodes recursively.
	 * 
	 * Looks for a returned depth of the inserted node. If this returned depth
	 * is greater than the current height, this.height is updated.
	 */
	this.insert = function(key) {
		if (this.root == null) {
			this.root = new BinarySearchNode(key, null, 0, 0);
			this.height = 0;
		}
		else {
			var insertedHeight = this.root.insert(key);
			if (insertedHeight > this.height)
				this.height = insertedHeight;
		}
	};

}

function BinarySearchNode(key, parent, depth, position) {
	this.left = null;
	this.right = null;
	this.parent = parent;
	this.depth = depth;
	this.position = position;
	this.key = key;
	
	/**
	 * Accepts a key as an argument, and passes it on to the appropriate
	 * child node.
	 */
	this.insert = function(key) {
		// compare keys
		if (key < this.key) {
			if (this.left) {
				return this.left.insert(key);
			}
			else {
				this.left = new BinarySearchNode(key, this, 
					this.depth + 1, 2 * this.position);
				return this.depth + 1;
			}
		}
		else if (key > this.key) {
			if (this.right) {
				return this.right.insert(key);
			}
			else {
				this.right = new BinarySearchNode(key, this,
					this.depth + 1, 2 * this.position + 1);
				return this.depth + 1;
			}
		}
	};
	
	
}