JSONBinarySearchTree = function() {
	
	// Methods //
	
	this.insert = function(key, node) {
		if (node == null)
			node = this.nodes;
		
		// landed on one of the null nodes, so promote the null node
		// to a full-blown bst node and give it null node children
		if (node.key == null) {
			node.key = key;
			node.left = this.createNullNode();
			node.right = this.createNullNode();
		}
		else if (key < node.key) {
			this.insert(key, node.left);
		}
		else if (key > node.key) {
			this.insert(key, node.right);
		}
	};
	
	this.createNullNode = function() {
		return {
				"key" : null,
				"left" : null,
				"right" : null
				};
	};
	
	this.getNodes = function () {
		return this.nodes;
	};
	
	// Member Variables //
	
	// create an empty tree with one null node
	this.nodes = this.createNullNode();
};