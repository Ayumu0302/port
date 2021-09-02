package simplepainter;
 
import java.awt.Color;
import java.awt.Graphics;
import java.awt.event.*;
import javax.swing.*;
import java.awt.Point;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.MouseMotionListener;
import java.util.ArrayList;
import java.util.List;
 
public class SimplePainter {
 
    public static void main(String[] args) {
        JFrame frame = new JFrame("SimplePainter");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(600, 400);
        frame.setLocationRelativeTo(null);
 
        Canvas canvas = new Canvas();
        frame.add(canvas);
 
        frame.setVisible(true);
    }
 
}
 
class Canvas extends JPanel implements MouseListener, MouseMotionListener {
	List<List<Point>> pintsList = new ArrayList<>();
	List<Point> currentPoints = new ArrayList<>();
    private int x = -100;
    private int y = -100;
    boolean isDraw = false;
 
    public Canvas() {
        addMouseListener(this);
        addMouseMotionListener(this);
        setSize(600, 400);
    }
    
 	@Override
	public void paint(Graphics g) {
		super.paint(g);
        g.setColor(Color.RED);
        g.fillOval(x-5, y-5, 10, 10);
		paintFreeCurvedLines(g);
	}

	void paintFreeCurvedLines(Graphics g) {
		if (isDraw) {
			pintsList.add(currentPoints);
			for (List<Point> points : pintsList) {
				for (int i = 1; i < points.size(); i++) {
					Point start = points.get(i-1);
					Point end = points.get(i);
					g.drawLine(start.x, start.y, end.x, end.y);
				}
			}
			currentPoints = new ArrayList<>();
		}
	}

	void paintFreeLines(Graphics g, List<Point> points) {
	}
 
    @Override
    public void mouseClicked(MouseEvent e) {
    }
 
    @Override
    public void mousePressed(MouseEvent e) {
        isDraw = false;
        x = e.getX();
        y = e.getY();
		currentPoints.add(new Point(x, y));
        super.repaint();
    }
 
    @Override
    public void mouseReleased(MouseEvent e) {
        isDraw = true;
        x = e.getX();
        y = e.getY();
		currentPoints.add(new Point(x, y));
		super.repaint();
    }
 
    @Override
    public void mouseEntered(MouseEvent e) {
    }
 
    @Override
    public void mouseExited(MouseEvent e) {
    }
 
    @Override
    public void mouseDragged(MouseEvent e) {
        x = e.getX();
        y = e.getY();
        currentPoints.add(new Point(x, y));
        super.repaint();
     }
 
    @Override
    public void mouseMoved(MouseEvent e) {
    }
 
}